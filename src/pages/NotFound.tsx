import { Home } from "@mui/icons-material";
import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Stack sx={{ flexGrow: 1, alignItems: "center", justifyContent: "center" }}>
      <Stack sx={{ alignItems: "center", marginTop: "-100px" }}>
        <Typography sx={{ fontSize: 40, fontWeight: "bold" }}>404</Typography>
        <Typography>The page you requested does not exist!</Typography>
        <Button
          startIcon={<Home />}
          variant="outlined"
          sx={{ marginTop: 4 }}
          onClick={() => navigate("/")}
        >
          Back to home page
        </Button>
      </Stack>
    </Stack>
  );
};

export default NotFound;
