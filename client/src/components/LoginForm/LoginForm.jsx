import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useStyles } from "./LoginForm.styles";
import { login } from "../../api/auth/login";
import { loginAC } from "../../redux/actionTypes/userActionTypes";

export default function LoginForm({ hideLoginForm }) {
  const dispatch = useDispatch();
  const loginHandler = async () => {
    const response = await login(formState);
    console.log(response);
    if (response.status !== 200) {
      setErrorMesage(response.data.message);
    } else {
      dispatch(loginAC());
      localStorage.setItem("token", response.data.token);
      hideLoginForm();
    }
  };
  
  const [formState, setFormState] = useState({ login: "", password: "" });
  const [errorMesage, setErrorMesage] = useState("");
  const { classes } = useStyles();
  return (
    <div className={classes.root}>
      <Box className={classes.form} component="form" autoComplete="off">
        <Typography variant="subtitle">Please input credentials</Typography>
        <div>
          <TextField
            required
            id="outlined-required"
            helperText="Login"
            type="email"
            value={formState.login}
            onChange={(event) => {
              setFormState((prev) => ({ ...prev, login: event.target.value }));
            }}
            margin="normal"
          />
        </div>
        <div>
          <TextField
            required
            id="filled-required"
            helperText="Password"
            type="password"
            value={formState.password}
            onChange={(event) => {
              setFormState((prev) => ({
                ...prev,
                password: event.target.value,
              }));
            }}
            margin="normal"
          />
        </div>
        {errorMesage && (
          <Typography variant="subtitle2">{errorMesage}</Typography>
        )}
        <div className={classes.btnContainer}>
          <Button variant="outlined" onClick={hideLoginForm}>
            Back
          </Button>
          <Button onClick={()=>loginHandler()}>Login</Button>
        </div>
      </Box>
    </div>
  );
}
