import * as React from "react";
import { useTranslation } from "react-i18next";

import Grid from "@mui/material/Grid";
import { Divider } from "@mui/material";

import TeamParametersRules from "../teams/TeamParametersRules";
import TeamParametersInfo from "../teams/TeamParametersInfo";

export default function TeamParameters(props) {
  const { t } = useTranslation();

  return (
    <Grid container direction="column" pl={10} pr={10}>
      <TeamParametersInfo teamId={props.teamId}/>

      <Divider style={{ backgroundColor: "#E1D2FC" }} />

      <TeamParametersRules teamId={props.teamId}/>
    </Grid>
  );
}
