import { Button, AppBar, Toolbar, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { loginAC, logoutAC } from "../../redux/actionTypes/userActionTypes";
import LoginForm from "../LoginForm/LoginForm";
import { useStyles } from "./Layout.styles";

export default function Layout() {
  const { classes } = useStyles();
  const [showLoginForm, setShowLoginForm] = useState(false);
  const { auth } = useSelector(state=> state.userReducer);
  const dispatch = useDispatch();
  const logout = () => {
    localStorage.removeItem("token");
    dispatch(logoutAC());
  };
  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(loginAC());
    }
  }, []);
  return (
    <>
      <AppBar position="static">
        <Toolbar disableGutters>
          <Typography variant="h3" color="inherit" component="div">
            TODOS
          </Typography>
          <Button
            onClick={() => {
              auth ? logout() : setShowLoginForm(true);
            }}
          >
            {auth ? "Log out" : "Log in"}
          </Button>
        </Toolbar>
      </AppBar>
      <div className={classes.container}>
        <Outlet />
      </div>
      {showLoginForm && (
        <LoginForm hideLoginForm={() => setShowLoginForm(false)} />
      )}
    </>
  );
}
