import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import logo from "../../assets/images/logo/logo_2.png";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {TextField, useTheme} from "@mui/material";
import Button from "@mui/material/Button";
import * as React from "react";
import {useTranslation} from "react-i18next";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import UserService from "../../services/app/user.service";
import * as App_Routes from "../../navigation/app/Routes";

function Invitation(){

    const { t } = useTranslation();
    const theme = useTheme();
    let navigate = useNavigate();
    const {token} = useParams();
    const [email, setEmail] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [lastName, setLastName] = useState('');
    const [lastNameError, setLastNameError] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [firstNameError, setFirstNameError] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [phoneNumberError, setPhoneNumberError] = useState(false);
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState(false);
    const [position, setPosition] = useState('');
    const [positionError, setPositionError] = useState(false);

    useEffect(() => {
        async function verifyToken() {
            await UserService.verifyInvitation(token).then((res) => {
                setEmail(res.data.email);
                setCompanyName(res.data.companyName);
            }).catch((e) => {
                navigate(App_Routes.LOGIN);
            })
        }
        verifyToken(); // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    const handleChange = (event) => {
        switch(event.target.name){
            case 'lastName':
                setLastNameError(false);
                setLastName(event.target.value);
                break;
            case 'firstName':
                setFirstNameError(false);
                setFirstName(event.target.value);
                break;
            case 'phoneNumber':
                setPhoneNumberError(false);
                setPhoneNumber(event.target.value);
                break;
            case 'position':
                setPositionError(false);
                setPosition(event.target.value);
                break;
            case 'password':
                setPasswordError(false);
                setPassword(event.target.value);
                break;
            case 'confirmPassword':
                setConfirmPasswordError(false);
                setConfirmPassword(event.target.value);
                break;
            default:
                return;
        }
    }

    const validate = () => {
        let valid = true;
        if(lastName.length < 2){
            setLastNameError(true);
            valid = false;
        }
        if(firstName.length < 2) {
            setFirstNameError(true);
            valid = false;
        }
        if(phoneNumber.length < 10 || phoneNumber.length > 12){
            setPhoneNumberError(true);
            valid = false;
        }
        if(position.length < 2) {
            setPositionError(true);
            valid = false;
        }
        if(password.length < 8) {
            setPasswordError(true);
            valid = false;
        }
        if(password !== confirmPassword) {
            setConfirmPasswordError(true);
            valid = false;
        }
        return valid;
    }

    const submitForm = async () => {
        if(validate()){
            const resources = {
                firstName: firstName,
                lastName: lastName,
                phoneNumber: phoneNumber,
                position: position,
                password: password,
                token: token
            }
            await UserService.createUserFromInvitation(resources).then(()=> {
                navigate(App_Routes.LOGIN);
            })
        }
    }

    return(
        <Container style={{ minHeight: '100vh', display: 'flex', minWidth: '100%', backgroundColor: theme.palette.background.paper }}>
            <Container maxWidth="sm">
                <Grid container direction="column" alignItems="center" >

                    <Grid item mt={7}>
                        <img src={logo} style={{ width: 50, height: 50 }} alt="contact" />
                    </Grid>

                    <Grid item mb={3}>

                        <Typography
                            variant="h6"
                            component="div"
                            color="#3F07A8"
                            style={{ fontWeight: 500 }}
                            fontSize={24}
                        >
                            {t('public:login:welcome')}
                        </Typography>
                    </Grid>


                    <Grid item xs={false} sm={3} md={2} maxWidth="xs" sx={{ backgroundColor: '#FFFFFF', maxWidth: '30%' }}>
                        <Box
                            sx={{
                                marginTop: 3,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                mx: 5
                            }}
                        >

                            <Typography component="h1" variant="h5" color="#3F07A8">
                                {t('public:login:my_account')} - {companyName}
                            </Typography>

                            <Box component="form" noValidate sx={{ mt: 1 }}>
                                <Grid container direction={"row"} spacing={1} justifyContent={"space-evenly"}>
                                    <Grid item xs={6}>
                                        <TextField
                                            margin="normal"
                                            required
                                            fullWidth
                                            id="firstName"
                                            label={t('generic:firstname')}
                                            name="firstName"
                                            autoComplete="given-name"
                                            value={firstName}
                                            error={firstNameError}
                                            onChange={handleChange}
                                            helperText={firstNameError && t('app:errors:text')}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField
                                            margin="normal"
                                            required
                                            fullWidth
                                            id="name"
                                            label={t('generic:lastname')}
                                            name="lastName"
                                            autoComplete="family-name"
                                            value={lastName}
                                            error={lastNameError}
                                            onChange={handleChange}
                                            helperText={lastNameError && t('app:errors:text')}
                                        />
                                    </Grid>
                                </Grid>
                                <Grid container direction={"row"} spacing={2} justifyContent={"space-evenly"}>
                                    <Grid item xs={12}>
                                        <TextField
                                            margin="normal"
                                            required
                                            fullWidth
                                            id="email"
                                            label={t('generic:email')}
                                            name="email"
                                            disabled
                                            autoComplete="email"
                                            value={email}
                                            onChange={handleChange}
                                        />
                                    </Grid>
                                </Grid>

                                <Grid container direction={"row"} spacing={1} justifyContent={"space-evenly"}>
                                    <Grid item xs={6}>
                                        <TextField
                                            margin="normal"
                                            required
                                            fullWidth
                                            id="phoneNumber"
                                            label={t('generic:phone')}
                                            name="phoneNumber"
                                            autoComplete="tel"
                                            value={phoneNumber}
                                            error={phoneNumberError}
                                            onChange={handleChange}
                                            helperText={ phoneNumberError && t('app:errors:text')}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField
                                            margin="normal"
                                            fullWidth
                                            required
                                            id="position"
                                            label={t('generic:position')}
                                            name="position"
                                            autoComplete="organization-title"
                                            value={position}
                                            error={positionError}
                                            onChange={handleChange}
                                            helperText={ positionError && t('app:errors:text')}
                                        />
                                    </Grid>
                                </Grid>

                                <Grid container direction={"row"} spacing={1} justifyContent={"space-evenly"}>
                                    <Grid item xs={6}>
                                        <TextField
                                            margin="normal"
                                            required
                                            fullWidth
                                            id="password"
                                            label={t('generic:password')}
                                            name="password"
                                            error={passwordError}
                                            autoComplete="new-password"
                                            value={password}
                                            type="password"
                                            onChange={handleChange}
                                            helperText={ passwordError && t('app:errors:password')}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField
                                            margin="normal"
                                            required
                                            fullWidth
                                            id="confirmPassword"
                                            label={t('generic:password_confirm')}
                                            name="confirmPassword"
                                            error={confirmPasswordError}
                                            value={confirmPassword}
                                            type="password"
                                            onChange={handleChange}
                                            helperText={confirmPasswordError && t('app:errors:confirmPassword')}
                                        />
                                    </Grid>
                                </Grid>
                                <Button
                                    type="button"
                                    fullWidth
                                    onClick={() => submitForm()}
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2, backgroundColor: '#3F07A8' }}
                                >
                                    {t('generic:create_account')}
                                </Button>
                            </Box>

                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Container>
    )
}

export default Invitation;