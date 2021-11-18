import { Box, Container, Stack, useTheme } from "@mui/material";
import { grey } from "@mui/material/colors";
import LoadingCard from "components/LoadingCard";
import SubContent from "components/SubContent";
import SubredditCard from "components/SubredditCard";
import SubredditHeader from "components/SubredditHeader";
import { redditHooks } from "hooks";
import React from "react";
import { useParams } from "react-router";

const ThreadPage: React.FC = () => {
  let id = useParams().id || "";

  const theme = useTheme();
  const { loading, threadInfo } = redditHooks.useThreadInfo(id);

  return (
    <Box sx={{ bgcolor: grey[300], flexGrow: 1 }}>
      <SubredditHeader></SubredditHeader>
      <Container maxWidth="md" sx={{ my: 2.5 }}>
        <Stack direction="row" justifyContent="space-between">
          <Box
            sx={{
              maxWidth: "sm",
              width: "100%",
              [theme.breakpoints.down("md")]: {
                maxWidth: "md",
              },
            }}
          >
            {loading && <LoadingCard />}
            {threadInfo?.thread && (
              <SubredditCard thread={threadInfo.thread} isDetailCard />
            )}
          </Box>

          <SubContent />
        </Stack>
      </Container>
    </Box>
  );
};

export default ThreadPage;
