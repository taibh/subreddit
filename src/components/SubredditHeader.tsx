import { Avatar, Box, Chip, Container, Stack, Typography } from "@mui/material";
import { blue, common, grey } from "@mui/material/colors";
import React from "react";
import { useNavigate } from "react-router-dom";

const SubredditHeader: React.FC = () => {
  const navigate = useNavigate();

  const navigateToHomePage = () => {
    navigate("/");
  };

  return (
    <>
      <Box sx={{ height: 64, bgcolor: blue[300] }} />
      <Box sx={{ height: 78, bgcolor: common.white }}>
        <Container maxWidth="md" sx={{ display: "flex" }}>
          <Avatar
            sx={{ width: 72, height: 72, position: "relative", top: -12 }}
          />
          <Box sx={{ mt: 1, ml: 3 }}>
            <Stack direction="row">
              <Typography
                component="div"
                sx={{
                  fontWeight: "bold",
                  fontSize: 28,
                  lineHeight: "32px",
                  cursor: "pointer",
                }}
                onClick={navigateToHomePage}
              >
                Dota 2 on Reddit
              </Typography>
              <Chip
                label="Join"
                clickable
                color="primary"
                sx={{
                  ml: 2,
                  fontSize: 14,
                  fontWeight: "bold",
                  lineHeight: "17px",
                  px: 2,
                }}
              />
            </Stack>
            <Typography
              component="div"
              sx={{
                fontWeight: 500,
                fontSize: 14,
                lineHeight: "18px",
                color: grey[500],
                cursor: "pointer",
              }}
              onClick={navigateToHomePage}
            >
              r/DotA2
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default SubredditHeader;
