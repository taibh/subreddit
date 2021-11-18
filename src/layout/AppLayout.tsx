import { Home, KeyboardArrowUp } from "@mui/icons-material";
import {
  AppBar,
  Box,
  CssBaseline,
  Fab,
  IconButton,
  Stack,
  Toolbar,
  Typography,
  useScrollTrigger,
  Zoom,
} from "@mui/material";
import React from "react";

const ScrollTop = ({ ...props }) => {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector("#back-to-top-anchor");

    if (anchor) {
      anchor.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Zoom>
  );
};

const ElevationScroll = ({ ...props }) => {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
};

const AppLayout: React.FC = ({ children, ...props }) => {
  return (
    <Stack direction="column" sx={{ minHeight: "100vh" }}>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar color="inherit">
          <Toolbar>
            <Typography>
              <IconButton edge="start" color="inherit">
                <Home />
              </IconButton>
            </Typography>
            <Typography
              variant="h6"
              component="div"
              sx={{ display: { xs: "none", sm: "block", cursor: "pointer" } }}
            >
              Subreddit
            </Typography>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar id="back-to-top-anchor" />
      {children}
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUp />
        </Fab>
      </ScrollTop>
    </Stack>
  );
};

export default AppLayout;
