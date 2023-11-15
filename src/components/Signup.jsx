import { Button, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import FileUploadButton from "./FileUpload";

const Signup = ({ handleToggleAuth }) => {
  const gradientStyle = {
    background: "-webkit-linear-gradient(90deg, #ccc 40%, #40a2bd 60%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };
  
  return (
    <div>
      <Stack
        spacing={3}
        width={{ xs: "100%", sm: "60%" }}
        ml="auto"
        mr="auto"
        textAlign="center"
      >
        <Typography fontWeight="bold" variant="h3" style={gradientStyle}>
          Signup
        </Typography>
        <TextField
          id="outlined-email-input"
          label="Email"
          type="email"
          autoComplete="current-email"
        />
        <TextField
          id="outlined-password-input1"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <TextField
          id="outlined-password-input2"
          label="Confirm Password"
          type="password"
          autoComplete="current-password"
        />
        <FileUploadButton />
        <Button
          variant="contained"
          disableElevation
          sx={{ p: 2, bgcolor: "#d0d0d0", color: "white" }}
        >
          signup
        </Button>
        <Stack direction="row" spacing={0.3}>
          <Typography>Already have account?</Typography>
          <Typography
            sx={{ color: "blue", cursor: "pointer" }}
            onClick={() => handleToggleAuth(true)}
          >
            login
          </Typography>
        </Stack>
      </Stack>
    </div>
  );
};

export default Signup;
