
exports.updateRulesValue = async function(record, rules) {
    try {
        await record
            .update({
            ruleScope: rules.ruleScope,
            officeMaximum: rules.officeMaximum,
            remoteMaximum: rules.remoteMaximum,
            mondayMandatoryStatus: rules.mondayMandatoryStatus,
            tuesdayMandatoryStatus: rules.tuesdayMandatoryStatus,
            wednesdayMandatoryStatus: rules.wednesdayMandatoryStatus,
            thursdayMandatoryStatus: rules.thursdayMandatoryStatus,
            fridayMandatoryStatus: rules.fridayMandatoryStatus
            })
        return true
    } catch {
        return false
    }
}

exports.updateCompanyRulesValue = async function(record, rules) {
    try {
        await record
            .update({
            ruleScope: rules.ruleScope,
            officeMaximum: rules.officeMaximum,
            remoteMaximum: rules.remoteMaximum,
            officeBookingMandatory: rules.officeBookingMandatory,
            mondayMandatoryStatus: rules.mondayMandatoryStatus,
            tuesdayMandatoryStatus: rules.tuesdayMandatoryStatus,
            wednesdayMandatoryStatus: rules.wednesdayMandatoryStatus,
            thursdayMandatoryStatus: rules.thursdayMandatoryStatus,
            fridayMandatoryStatus: rules.fridayMandatoryStatus
            })
        return true
    } catch {
        return false
    }
}