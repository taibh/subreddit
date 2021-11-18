import { Stack, Typography } from "@mui/material";
import React from "react";

const NotFound: React.FC = () => {
  return (
    <Stack sx={{ flexGrow: 1, alignItems: "center", justifyContent: "center" }}>
      <Stack sx={{ alignItems: "center", marginTop: "-100px" }}>
        <Typography sx={{ fontSize: 40, fontWeight: "bold" }}>404</Typography>
        <Typography>The page you requested does not exist!</Typography>
      </Stack>
    </Stack>
  );
};

export default NotFound;
