import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { Button, Divider, Modal, TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { BlockPicker } from "react-color";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import UserService from "../../../../services/app/user.service";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function ResetPasswordModal(props) {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [emailCheck, setEmailCheck] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  useEffect(() => {
    console.log(validateEmail(email));
    setEmailCheck(validateEmail(email));
  }, [email]);

  const validateEmail = (email) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    }
    return false;
  };

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const sendEmail = async () => {
    setEmailSent(true);
    await UserService.resetPassword({ email: email });
  };

  const closeModal = () => {
    props.handleModalClose();
    setEmail("");
    setEmailCheck(false);
    setEmailSent(false);
  };

  return (
    <Modal
      open={props.openModal}
      onClose={closeModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Grid container direction={"column"} spacing={1}>
          <Grid item>
            <Grid
              container
              direction={"row"}
              spacing={1}
              justifyContent="space-between"
            >
              <Grid item>
                <Typography
                  id="modal-modal-title"
                  variant="h6"
                  component="h2"
                  style={{ color: "#414040" }}
                >
                  {t("public:login.modal.title")}
                </Typography>
              </Grid>

              <Grid item>
                <IconButton aria-label="delete" onClick={closeModal}>
                  <CloseIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>

          <Grid item>
            <Divider />
          </Grid>

          <Grid item mt={4} hidden={!emailSent}>
            <Alert severity="success">
              <AlertTitle>{t("public:login.modal.thanks")}</AlertTitle>
              {t("public:login.modal.text")}
            </Alert>
          </Grid>

          <Grid item mt={4}>
            <TextField
              fullWidth
              label="Email"
              id="fullWidth"
              type="email"
              name={"email"}
              value={email}
              disabled={emailSent}
              onChange={handleChange}
            />
          </Grid>

          <Grid item mt={4}>
            <Button
              fullWidth
              variant={"outlined"}
              color={"secondary"}
              onClick={sendEmail}
              disabled={!emailCheck || emailSent}
            >
              {t("generic:send")}
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
}

export default ResetPasswordModal;
