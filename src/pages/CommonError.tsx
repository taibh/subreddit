import { Home } from "@mui/icons-material";
import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";

const CommonError: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Stack sx={{ flexGrow: 1, alignItems: "center", justifyContent: "center" }}>
      <Stack sx={{ alignItems: "center", marginTop: "-100px" }}>
        <Typography>An error has occurred. Please try again later!</Typography>

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

export default CommonError;
