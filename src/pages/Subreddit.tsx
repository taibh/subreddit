import { Box, Container, Stack } from "@mui/material";
import { grey } from "@mui/material/colors";
import MainContent from "components/MainContent";
import SubContent from "components/SubContent";
import SubredditHeader from "components/SubredditHeader";
import React from "react";

const Subreddit: React.FC = () => {
  return (
    <Box sx={{ bgcolor: grey[300], flexGrow: 1 }}>
      <SubredditHeader></SubredditHeader>
      <Container maxWidth="md" sx={{ my: 2.5 }}>
        <Stack direction="row" justifyContent="space-between">
          <MainContent />
          <SubContent />
        </Stack>
      </Container>
    </Box>
  );
};

export default Subreddit;
