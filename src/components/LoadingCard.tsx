import { ThumbDownAltOutlined, ThumbUpAltOutlined } from "@mui/icons-material";
import { Box, Skeleton, Stack } from "@mui/material";
import { common, grey } from "@mui/material/colors";
import React from "react";

const LoadingCard: React.FC = () => {
  return (
    <Box sx={{ bgcolor: common.white, mb: 2, borderRadius: 1 }}>
      <Stack direction="row">
        <Stack
          direction="column"
          sx={{ bgcolor: grey[100], p: 1, alignItems: "center" }}
        >
          <ThumbUpAltOutlined sx={{ width: 20, color: grey[500] }} />
          <ThumbDownAltOutlined sx={{ width: 20, color: grey[500] }} />
        </Stack>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ p: 1 }}>
            <Skeleton variant="text" width={200} />
            <Skeleton variant="text" height={40} width={400} />
            <Skeleton variant="rectangular" width="100%" height={250} />
          </Box>
          <Box sx={{ px: 1 }}>
            <Skeleton variant="text" height={40} width={300} />
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default LoadingCard;
