import * as React from "react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import TeamParameters from "../../components/containers/app/teamsnew/TeamParameters";

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

export default function WorkPolicy() {
  const { t } = useTranslation();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          textColor="secondary"
          indicatorColor="secondary"
        >
          <Tab label="Informations générales" {...a11yProps(0)} />
          <Tab label="Utilisateurs" {...a11yProps(1)} />
          <Tab label="Règles spécifiques" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <TeamParameters />
      </TabPanel>
      <TabPanel value={value} index={1}>
        hella
      </TabPanel>
      <TabPanel value={value} index={2}>
        test
      </TabPanel>
    </div>
  );
}
