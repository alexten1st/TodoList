import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createTodo } from "../../api/createTodo";
import { useStyles } from "./TodoModal.styles";
import { getTodos } from "../../api/getTodos";

export default function TodoModal({ hideModel, page }) {

  const dispatch = useDispatch()
  const mailRegExp =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const createHandler= () => {
    Object.keys(todoState).forEach((key) => {
      if (!todoState[key]) {
        setError((prev) => ({ ...prev, [key]: true }));
      }
    });
    if (!String(todoState.email).toLowerCase().match(mailRegExp)) {
      setError((prev) => ({ ...prev, email: true }));
    }
    if (!Object.values(error).includes(true)) {
      createTodo(todoState)
      dispatch(getTodos(page-1));
      hideModel()
    }
  };
  const [todoState, setTodoState] = useState({
    email: "",
    description: "",
    userName: "",
  });
  const [error, setError] = useState({
    email: false,
    description: false,
    userName: false,
  });
  const { classes } = useStyles();
  return (
    <div className={classes.root}>
      <Box
        className={classes.form}
        component="form"
        autoComplete="off"
      >
        <Typography variant="subtitle">Add todo form</Typography>
        <div>
          <TextField
            required
            error={error.email}
            id="outlined-required"
            helperText={error.email ? "Ошибка заполнения" : "Email"}
            type="email"
            value={todoState.email}
            onChange={(event) => {
              setError((prev) => ({ ...prev, email: false }));
              setTodoState((prev) => ({ ...prev, email: event.target.value }));
            }}
            margin="normal"
          />
        </div>
        <div>
          <TextField
            required
            error={error.userName}
            id="filled-required"
            helperText="Name"
            value={todoState.userName}
            onChange={(event) => {
              setError((prev) => ({ ...prev, userName: false }));
              setTodoState((prev) => ({
                ...prev,
                userName: event.target.value,
              }));
            }}
            margin="normal"
          />
        </div>
        <div>
          <TextField
            error={error.description}
            id="standard-helperText"
            helperText="Description"
            value={todoState.description}
            onChange={(event) => {
              setError((prev) => ({ ...prev, description: false }));
              setTodoState((prev) => ({
                ...prev,
                description: event.target.value,
              }));
            }}
            margin="normal"
          />
        </div>
        <div className={classes.btnContainer}>
          <Button variant="outlined" onClick={hideModel}>
            Cancel
          </Button>
          <Button onClick={createHandler}>Create</Button>
        </div>
      </Box>
    </div>
  );
}
