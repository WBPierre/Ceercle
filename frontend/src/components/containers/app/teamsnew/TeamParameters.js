import * as React from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

import Grid from "@mui/material/Grid";
import { Divider } from "@mui/material";

import TeamParametersRules from "../teamsnew/TeamParametersRules";
import TeamParametersInfo from "../teamsnew/TeamParametersInfo";

export default function TeamParameters(props) {
  const { t } = useTranslation();
  const {id} = useParams()

  return (
    <Grid container direction="column" pl={10} pr={10}>
      <TeamParametersInfo teamId={id}/>

      <Divider style={{ backgroundColor: "#E1D2FC" }} />

      <TeamParametersRules teamId={id}/>
    </Grid>
  );
}
