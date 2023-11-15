import { Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

const AuthWrapper = () => {
  const [toggleAuth, setToggleAuth] = useState(false);

  const handleToggleAuth = (flag) => {
    setToggleAuth(!flag);
  };

  return (
    <Grid container p={2} height="100vh">
      <Grid
        xs={12}
        md={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Typography
          component="h1"
          variant="h4"
          fontWeight="bold"
          color="#42A7C3"
          p={{ xs: 0, sm: 2 }}
        >
          Job Tracker!
        </Typography>
        {toggleAuth ? (
          <Signup handleToggleAuth={handleToggleAuth} />
        ) : (
          <Login handleToggleAuth={handleToggleAuth} />
        )}

        <Typography mt={3} variant="body1" color="#a8a8a8">
          © 2021 Job Tracker. All Rights Reserved
        </Typography>
      </Grid>

      <Grid
        md={6}
        sx={{
          display: { xs: "none", md: "flex" },
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box>
          <img
            src="/imgs/side right.jpg"
            alt="banner "
            loading="lazy"
            style={{ maxWidth: "100%" }}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default AuthWrapper;
