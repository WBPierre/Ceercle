import * as React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate} from "react-router-dom";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Chip from '@mui/material/Chip';
import Grid from "@mui/material/Grid";
import { Divider } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import * as App_Routes from "../../navigation/app/Routes";
import TeamParameters from "../../components/containers/app/teams/TeamParameters";
import TeamUsersGrid from "../../components/containers/app/teams/TeamUsersGrid";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function TeamSetting() {
  const { t } = useTranslation();
  const {id} = useParams()
  let navigate = useNavigate();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
        <Grid container direction="row" spacing={3}>
          <Grid item md={10}>
            <Box>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
                textColor="secondary"
                indicatorColor="secondary"
              >
                <Tab label="Paramètres d'équipe" {...a11yProps(0)} />
                <Tab label="Utilisateurs" {...a11yProps(1)} />
              </Tabs>
            </Box>
          </Grid>
          <Grid item md={2}>
              <Chip
                  label={t('app:teams:personalize.back_to_team')}
                  sx={{
                      borderColor: "#777575", color: "#777575", fontWeight: "bold"
                  }}
                  color="error"
                  icon={<ArrowBackIcon />}
                  variant="outlined"
                  onClick={() => navigate(App_Routes.TEAMS)}
              />
          </Grid>
        </Grid>

        <Divider/>

        <TabPanel value={value} index={0}>
          <TeamParameters teamId={id}/>
        </TabPanel>
        <TabPanel value={value} index={1}>
           <TeamUsersGrid teamId={id}/>
        </TabPanel>
    </div>
  );
}
