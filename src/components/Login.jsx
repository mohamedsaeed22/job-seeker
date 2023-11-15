import { Button, Divider, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { Facebook, Google } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Login = ({ handleToggleAuth }) => {
  const gradientStyle = {
    background: "-webkit-linear-gradient(90deg, #ccc 40%, #40a2bd 60%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };
  const navigate = useNavigate();

  return (
    <>
      <Stack
        spacing={3}
        width={{ xs: "100%", sm: "60%" }}
        ml="auto"
        mr="auto"
        textAlign="center"
      >
        <Typography fontWeight="bold" variant="h3" style={gradientStyle}>
          Login
        </Typography>
        <TextField
          id="outlined-email-input"
          label="Email"
          type="email"
          autoComplete="current-email"
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <Button
          variant="contained"
          disableElevation
          sx={{ p: 2, bgcolor: "#d0d0d0", color: "white" }}
          onClick={() => navigate("/")}
        >
          Login
        </Button>
        <Stack direction="row" spacing={0.3}>
          <Typography>Create account?</Typography>
          <Typography
            sx={{ color: "blue", cursor: "pointer" }}
            onClick={() => handleToggleAuth(false)}
          >
            signup
          </Typography>
        </Stack>
        <Divider>or enter with</Divider>
        <Button
          sx={{ p: 1.5, textTransform: "uppercase" }}
          variant="outlined"
          startIcon={<Google />}
        >
          Google
        </Button>
        <Button
          sx={{ p: 1.5, textTransform: "uppercase" }}
          variant="outlined"
          startIcon={<Facebook />}
        >
          Facebook
        </Button>
      </Stack>
    </>
  );
};

export default Login;
