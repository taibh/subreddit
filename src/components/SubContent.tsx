import { Box, Card, CardContent, CardHeader, useTheme } from "@mui/material";
import { indigo } from "@mui/material/colors";
import React from "react";

const SubContent: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: 320,
        [theme.breakpoints.down("md")]: {
          display: "none",
        },
      }}
    >
      <Card sx={{ mb: 2 }}>
        <CardHeader
          sx={{ bgcolor: indigo[300], height: 52 }}
          title="More Information"
        ></CardHeader>
        <CardContent>Details</CardContent>
      </Card>
      <Card>
        <CardHeader
          sx={{ bgcolor: indigo[300], height: 52 }}
          title="More Information"
        ></CardHeader>
        <CardContent>Details</CardContent>
      </Card>
    </Box>
  );
};

export default SubContent;
