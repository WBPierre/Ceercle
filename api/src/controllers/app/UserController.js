const User = require("../../models/User");
const Company = require("../../models/Company");
const Security = require("../../services/Security");
const { body, param, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const uploadProfile = require("../../middlewares/UploadProfileMiddleware");
const uploadBanner = require("../../middlewares/UploadBannerMiddleware");
const Moment = require("moment");
const { v4: uuidv4 } = require("uuid");
const Mailer = require("../../services/Mailer");
const UserRepository = require("../../repositories/UserRepository");
const CompanyRepository = require("../../repositories/CompanyRepository");
const fs = require("fs");
const RulesService = require("../../services/RulesService");
const TeamRepository = require('../../repositories/TeamRepository');

exports.listAllUsers = async function (req, res) {
  const users = await UserRepository.findAllActiveForCompany(res.locals.auth.user.companyId);
  res.json(users);
};

exports.getUserForCompany = async function (req, res, next) {
  await UserRepository.findAllActiveForCompany(res.locals.auth.user.companyId, [["lastName", "ASC"], ["firstName", "ASC"]])
      .then(async (record) => {
        let users_formatted = [];
        for (let i = 0; i < record.length; i++) {
          let user = {
            id: record[i].id,
            label: record[i].firstName + " " + record[i].lastName,
          };
          users_formatted.push(user);
        }
        res.json(users_formatted);
      });
};

exports.verifyInvitation = async function (req, res, next) {
  const user = await UserRepository.findOneByToken(req.params.token);
  if (!user) {
    res.status(404);
    res.send();
  } else {
    if (user.active || user.isDeleted) {
      res.status(404);
      res.send();
    } else {
      const company = await user.getCompany();
      res.json({ companyName: company.name, email: user.email });
    }
  }
};

exports.disableUser = async function (req, res, next) {
  const user = await UserRepository.findOneById(req.params.id);
  if (!user) {
    res.status(404);
    res.send();
  } else {
    await user.update({ isDeleted: true });
    res.status(200);
    res.send();
  }
};

exports.createUserFromInvitation = async function (req, res, next) {
  const user = await UserRepository.findOneByToken(req.params.token);
  if (!user) {
    res.status(404);
    res.send();
  } else {
    const password = await Security.hashPassword(req.body.password);
    const currentDay = Moment().tz("Europe/Paris").format("YYYY-MM-DD");
    await user.update({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phoneNumber: req.body.phoneNumber,
      active: true,
      position: req.body.position,
      password: password,
      activation_day: currentDay,
    });
    let company = await user.getCompany();
    await Mailer.sendActivationAccount(user.email, {
      companyName: company.name,
    });
    res.status(200);
    res.send();
  }
};

exports.createInvitation = async function (req, res, next) {
  const user = await UserRepository.findOneByEmailForCompany(req.body.email, res.locals.auth.user.companyId);
  const token = uuidv4();
  if (!user) {
    await User.create({
      email: req.body.email,
      activation_token: token,
      companyId: res.locals.auth.user.companyId,
    });
  } else {
    await user.update({ activation_token: token });
  }
  // SHOOT EMAIL
  let link;
  if (process.env.NODE_ENV === "development") {
    link =
      process.env.STORAGE_PROTOCOL +
      "://" +
      process.env.STORAGE_HOST +
      "/app/invitation/" +
      token;
  } else {
    link = "https://app.ceercle.io/invitation/" + token;
  }
  const company = await CompanyRepository.findOneById(res.locals.auth.user.companyId);
  if(!company){
    res.status(404);
    res.send();
  }else{
    await Mailer.sendInvitation(req.body.email, {
      companyName: company.name,
      link: link,
    });
    res.status(200);
    res.send();
  }
};

exports.listGlossaryUsers = async function (req, res) {
  const users = await UserRepository.findAllActiveForCompany(res.locals.auth.user.companyId);
  let arr = [];
  for (let i = 0; i < users.length; i++) {
    let obj = {
      firstName: users[i].firstName,
      lastName: users[i].lastName,
      position: users[i].position,
      teams: await users[i].getTeams(),
      email: users[i].email,
      phoneNumber: users[i].phoneNumber,
      profilePicturePath: users[i].profilePicturePath,
      bannerPath: users[i].bannerPath,
    };
    arr.push(obj);
  }
  res.json(arr);
};

exports.listAllUsersNamesForTeam = async function (req, res, next) {
  await UserRepository.findAllActiveForCompany(res.locals.auth.user.companyId, [["lastName", "ASC"], ["firstName", "ASC"]])
  .then(async (record) => {
    let users_formatted = [];
    for (let i = 0; i < record.length; i++) {
      let user = {
        id: record[i].id,
        label: record[i].firstName + " " + record[i].lastName,
        isInTeam: await record[i].hasTeam(parseInt(req.params.teamIndex)),
      };
      users_formatted.push(user);
    }
    res.json(users_formatted);
  });
};

exports.getUserInfo = async function (req, res, next) {
  await UserRepository.findOneById(res.locals.auth.user.id)
  .then(async (record) => {
    if (!record) {
      res.status(404);
      res.send();
    } else {
      res.status(200).json({
        firstName: record.firstName,
        lastName: record.lastName,
        email: record.email,
        phoneNumber: record.phoneNumber,
        isAdmin: record.isAdmin,
        defaultWorkingMorningHour: record.defaultWorkingMorningHour,
        defaultWorkingMorningMinutes: record.defaultWorkingAfternoonMinutes,
        defaultWorkingAfternoonHour: record.defaultWorkingAfternoonHour,
        defaultWorkingAfternoonMinutes: record.defaultWorkingAfternoonMinutes,
        timezone: record.timezone,
        lang: record.lang,
        mondayStatus: record.mondayStatus,
        tuesdayStatus: record.tuesdayStatus,
        wednesdayStatus: record.wednesdayStatus,
        thursdayStatus: record.thursdayStatus,
        fridayStatus: record.fridayStatus,
        favoriteDesk: record.favoriteDesk,
        position: record.position,
        profilePicturePath: record.profilePicturePath,
        bannerPath: record.bannerPath,
        teams: await record.getTeams(),
      });
    }
  });
};

exports.getUserInTeam = async function (req, res, next) {
  await UserRepository.findOneById(req.params.userId)
  .then(async (record) => {
    if (!record) {
      res.status(404);
      res.send();
    } else {
      let teams = record.getTeams();
      let flag = false;
      for (let i = 0, len = teams.length; i < len; i++) {
        if (teams[i].id === req.params.teamId) {
          flag = false;
        }
      }
      res.status(200).json({
        check: flag,
      });
    }
  });
};

exports.uploadProfile = async function (req, res, next) {
  try {
    await uploadProfile(req, res);

    if (req.file == undefined) {
      return res.status(400).send({ message: "Please upload a file!" });
    }
    const url =
      process.env.STORAGE_PROTOCOL +
      "://" +
      process.env.STORAGE_HOST +
      ":" +
      process.env.STORAGE_PORT +
      "/public/assets/profile/" +
      req.file.filename;
    await UserRepository.findOneById(res.locals.auth.user.id)
    .then(async (record) => {
      if (!record) {
        res.status(404);
        res.send();
      } else {
        if(record.profilePicturePath !== null){
          let oldPath = record.profilePicturePath.split("/");
          let old = oldPath[oldPath.length - 1];
          try {
            fs.unlinkSync(__basedir+"/public/assets/profile/"+old);
          } catch(err) {
            console.error(err)
          }
        }
        await record.update({ profilePicturePath: url });
      }
    });
    res.status(200).send({ path: url });
  } catch (err) {
    res.status(403).send({
      message: `Could not upload the file ${err}`,
    });
  }
};

exports.uploadBanner = async function (req, res, next) {
  try {
    await uploadBanner(req, res);

    if (req.file == undefined) {
      return res.status(400).send({ message: "Please upload a file!" });
    }
    const url =
      process.env.STORAGE_PROTOCOL +
      "://" +
      process.env.STORAGE_HOST +
      ":" +
      process.env.STORAGE_PORT +
      "/public/assets/banner/" +
      req.file.filename;
    await UserRepository.findOneById(res.locals.auth.user.id)
    .then(async (record) => {
      if (!record) {
        res.status(404);
        res.send();
      } else {
        if(record.bannerPath !== null){
          let oldPath = record.bannerPath.split("/");
          let old = oldPath[oldPath.length - 1];
          try {
            fs.unlinkSync(__basedir+"/public/assets/banner/"+old);
          } catch(err) {
            console.error(err)
          }
        }
        await record.update({ bannerPath: url });
      }
    });
    res.status(200).send({ path: url });
  } catch (err) {
    res.status(403).send({
      message: `Could not upload the file ${err}`,
    });
  }
};

exports.updatePassword = async function (req, res, next) {
  await UserRepository.findOneById(res.locals.auth.user.id)
  .then(async (record) => {
    if (!record) {
      res.status(404);
      res.send();
    } else {
      if (
        await Security.verifyPassword(req.body.oldPassword, record.password)
      ) {
        let password = await Security.hashPassword(req.body.newPassword);
        record.update({ password: password }).then((updated) => {
          res.json(updated);
        });
      } else {
        res.status(400);
        res.send();
      }
    }
  });
};

exports.updateUserSettings = async function (req, res, next) {
  await UserRepository.findOneById(res.locals.auth.user.id)
  .then((record) => {
    if (!record) {
      res.status(404);
      res.send();
    } else {
      let to_update = {
        defaultWorkingMorningHour: req.body.defaultWorkingMorningHour,
        defaultWorkingMorningMinutes: req.body.defaultWorkingMorningMinutes,
        defaultWorkingAfternoonHour: req.body.defaultWorkingAfternoonHour,
        defaultWorkingAfternoonMinutes: req.body.defaultWorkingAfternoonMinutes,
        timezone: req.body.timezone,
        lang: req.body.lang,
        mondayStatus: req.body.mondayStatus,
        tuesdayStatus: req.body.tuesdayStatus,
        wednesdayStatus: req.body.wednesdayStatus,
        thursdayStatus: req.body.thursdayStatus,
        fridayStatus: req.body.fridayStatus,
        favoriteDesk: req.body.favoriteDesk,
      };
      record.update(to_update).then((updated) => {
        res.json(updated);
      });
    }
  });
};

exports.updateUserGeneral = async function (req, res, next) {
  await UserRepository.findOneById(res.locals.auth.user.id)
  .then((record) => {
    if (!record) {
      res.status(404);
      res.send();
    } else {
      record
        .update({
          position: req.body.position,
          phoneNumber: req.body.phoneNumber,
        })
        .then((updated) => {
          res.json(updated);
        });
    }
  });
};

exports.resetPassword = async function (req, res, next) {
  await UserRepository.findOneByEmail(req.body.email)
  .then(async (record) => {
    if (!record) {
      res.status(404);
      res.send();
    } else {
      const token = uuidv4().replace("-", "").substring(0, 12);
      const userInfo = {
        firstName: record.firstName,
        email: req.body.email,
        token: token,
      };
      let password = await Security.hashPassword(token);
      record
        .update({
          password: password
        }).then(async() => {
          await Mailer.sendResetPassword(userInfo);
        res.status(200);
        res.send();
      })
    }
  });
};

exports.updateHasSpecificRules = async function (req, res, next) {
  await UserRepository.findOneById(req.body.userId)
  .then(async (record) => {
    if (!record) {
      res.status(404);
      res.send();
    } else {
      await record
        .update({
          hasSpecificRules: req.body.hasSpecificRules
        })
        .then(() => {
          res.status(200);
          res.send();
        });
    }
  });
};

exports.updateRulesValue = async function (req, res, next) {
  await UserRepository.findOneById(req.body.userId)
  .then(async (record) => {
    if (!record) {
      res.status(404);
      res.send();
    } else {
      if (record.hasSpecificRules) {
        await RulesService.updateRulesValue(record, req.body)
      } else {
        const teams_list = await record.getTeams()
        let level = teams_list
        if(!level){
          level = record.getCompany()
        } else {
          level = team[0]
        }
        const rules = {
          ruleScope: team.ruleScope,
          officeMaximum: team.officeMaximum,
          remoteMaximum: team.remoteMaximum,
          mondayMandatoryStatus: team.mondayMandatoryStatus,
          tuesdayMandatoryStatus: team.tuesdayMandatoryStatus,
          wednesdayMandatoryStatus: team.wednesdayMandatoryStatus,
          thursdayMandatoryStatus: team.thursdayMandatoryStatus,
          fridayMandatoryStatus: team.fridayMandatoryStatus
        }
        await RulesService.updateRulesValue(record, rules)
      }
      res.status(200);
      res.send();
    }
  });
};

exports.overwriteUserRuleWithTeam = async function (req, res, next) {
  await UserRepository.findOneById(req.body.userId)
  .then(async (record) => {
    if (!record) {
      res.status(404);
      res.send();
    } else {
      if (!record.hasSpecificRules) {
        const team = await TeamRepository.findOneById(req.body.teamId)
        const rules = {
          ruleScope: team.ruleScope,
          officeMaximum: team.officeMaximum,
          remoteMaximum: team.remoteMaximum,
          mondayMandatoryStatus: team.mondayMandatoryStatus,
          tuesdayMandatoryStatus: team.tuesdayMandatoryStatus,
          wednesdayMandatoryStatus: team.wednesdayMandatoryStatus,
          thursdayMandatoryStatus: team.thursdayMandatoryStatus,
          fridayMandatoryStatus: team.fridayMandatoryStatus
        }
        await RulesService.updateRulesValue(record, rules)
        res.status(200);
        res.send();
      } 
    }
  });
};

exports.getUserRules = async function (req, res, next) {
  await UserRepository.findOneById(req.params.userId)
  .then(async (record) => {
    if (!record) {
      res.status(404);
      res.send();
    } else {
      res.status(200).json({
        hasSpecificRules: record.hasSpecificRules,
        ruleScope: record.ruleScope,
        officeMaximum: record.officeMaximum,
        remoteMaximum: record.remoteMaximum,
        mondayMandatoryStatus: record.mondayMandatoryStatus,
        tuesdayMandatoryStatus: record.tuesdayMandatoryStatus,
        wednesdayMandatoryStatus: record.wednesdayMandatoryStatus,
        thursdayMandatoryStatus: record.thursdayMandatoryStatus,
        fridayMandatoryStatus: record.fridayMandatoryStatus
      });
    }
  });
};

exports.validate = (method) => {
  switch (method) {
    case "getUser": {
      return [
        param("id", "id doesn't exist").exists(),
        param("id", "id is not a number").isNumeric(),
      ];
    }
    case "disableUser": {
      return [
        param("id", "id doesn't exist").exists(),
        param("id", "id is not a number").isNumeric(),
      ];
    }
    case "createInvitation": {
      return [
        body("email", "email doesn't exist").exists(),
        body("email", "email is not an email").isEmail(),
      ];
    }
    case "verifyInvitation": {
      return [
        param("token", "token doesn't exist").exists(),
        param("token", "token is not a number").isString(),
      ];
    }
    case "createUserFromInvitation": {
      return [
        body("firstName", "firstName doesn't exist").exists(),
        body("firstName", "firstName is not a string").isString(),
        body("lastName", "lastName doesn't exist").exists(),
        body("lastName", "lastName is not a string").isString(),
        body("password", "password doesn't exist").exists(),
        body("password", "password is not a string").isString(),
        body("phoneNumber", "phoneNumber doesn't exist").exists(),
        body("phoneNumber", "phoneNumber is not a string").isString(),
        body("position", "position doesn't exist").exists(),
        body("position", "position is not a string").isString(),
        body("token", "token doesn't exist").exists(),
        body("token", "token is not a string").isString(),
      ];
    }
    case "updateUserSettings": {
      return [
        body(
          "defaultWorkingMorningHour",
          "defaultWorkingMorningHour doesn't exist"
        ).exists(),
        body(
          "defaultWorkingMorningHour",
          "defaultWorkingMorningHour is not an int"
        ).isInt(),
        body(
          "defaultWorkingMorningMinutes",
          "defaultWorkingMorningMinutes doesn't exist"
        ).exists(),
        body(
          "defaultWorkingMorningMinutes",
          "defaultWorkingMorningMinutes is not an int"
        ).isInt(),
        body(
          "defaultWorkingAfternoonHour",
          "defaultWorkingAfternoonHour doesn't exist"
        ).exists(),
        body(
          "defaultWorkingAfternoonHour",
          "defaultWorkingAfternoonHour is not an int"
        ).isInt(),
        body(
          "defaultWorkingAfternoonMinutes",
          "defaultWorkingAfternoonMinutes doesn't exist"
        ).exists(),
        body(
          "defaultWorkingAfternoonMinutes",
          "defaultWorkingAfternoonMinutes is not an int"
        ).isInt(),
        body("timezone", "timezone doesn't exist").exists(),
        body("timezone", "timezone is not a string").isString(),
        body("lang", "lang doesn't exist").exists(),
        body("lang", "lang is not a string").isString(),
        body("mondayStatus", "mondayStatus doesn't exist").exists(),
        body("mondayStatus", "mondayStatus is not an int").isInt(),
        body("tuesdayStatus", "tuesdayStatus doesn't exist").exists(),
        body("tuesdayStatus", "tuesdayStatus is not an int").isInt(),
        body("wednesdayStatus", "wednesdayStatus doesn't exist").exists(),
        body("wednesdayStatus", "wednesdayStatus is not an int").isInt(),
        body("thursdayStatus", "thursdayStatus doesn't exist").exists(),
        body("thursdayStatus", "thursdayStatus is not an int").isInt(),
        body("fridayStatus", "fridayStatus doesn't exist").exists(),
        body("fridayStatus", "fridayStatus is not an int").isInt(),
        body("favoriteDesk", "favoriteDesk doesn't exist").exists(),
        body("favoriteDesk", "favoriteDesk is not an int").isInt(),
      ];
    }
    case "updateUserGeneral": {
      return [
        body("phoneNumber", "phoneNumber doesn't exist").exists(),
        body("phoneNumber", "phoneNumber is not a string").isString(),
        body("position", "position doesn't exist").exists(),
        body("position", "position is not a string").isString(),
      ];
    }
    case "updatePassword": {
      return [
        body("oldPassword", "oldPassword is not a string").exists(),
        body("oldPassword", "oldPassword is not a string").isString(),
        body("newPassword", "newPassword is not a string").exists(),
        body("newPassword", "newPassword is not a string").isString(),
      ];
    }
    case "downloadImage": {
      return [
        param("filename", "filename is not a string").exists(),
        param("filename", "filename is not a string").isString(),
      ];
    }
    case "getUserInTeam": {
      return [
        param("userId", "userId doesn't exist").exists(),
        param("userId", "userId is not a number").isNumeric(),
        param("teamId", "teamId doesn't exist").exists(),
        param("teamId", "teamId is not a number").isNumeric(),
      ];
    }
    case "listAllUsersNamesForTeam": {
      return [
        param("teamIndex", "teamIndex doesn't exist").exists(),
        param("teamIndex", "teamIndex is not a number").isNumeric(),
      ];
    }
    case "resetPassword": {
      return [
        body("email", "email is not a string").exists(),
        body("email", "email is not an email").isEmail(),
      ];
    }
    case "updateHasSpecificRules": {
      return [
        body("hasSpecificRules", "hasSpecificRules does not exist").exists(),
        body("hasSpecificRules", "hasSpecificRules is not an boolean").isBoolean(),
      ];
    }
    case "updateRulesValue": {
      return [
        body('ruleScope', 'ruleScope is not a number').isNumeric(),
        body('remoteMaximum', 'remoteMaximum is not a number').isNumeric(),
        body('officeMaximum', 'officeMaximum is not a number').isNumeric(),
        body('mondayMandatoryStatus', 'mondayMandatoryStatus is not a number').isNumeric(),
        body('tuesdayMandatoryStatus', 'tuesdayMandatoryStatus is not a number').isNumeric(),
        body('wednesdayMandatoryStatus', 'wednesdayMandatoryStatus is not a number').isNumeric(),
        body('thursdayMandatoryStatus', 'thursdayMandatoryStatus is not a number').isNumeric(),
        body('fridayMandatoryStatus', 'fridayMandatoryStatus is not a number').isNumeric(),
      ];
    }
    case "overwriteUserRuleWithTeam": {
      return [
        body("userId", "userId does not exist").exists(),
        body("userId", "userId is not an integer").isNumeric(),
        body("teamId", "teamId does not exist").exists(),
        body("teamId", "teamId is not an integer").isNumeric(),
      ];
    }
    case "getUserRules": {
      return [
        param("userId", "userId does not exist").exists(),
        param("userId", "userId is not an integer").isNumeric(),
      ];
    }
  }
};