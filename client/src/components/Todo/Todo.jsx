import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeDescriptionTodo } from "../../api/changeDescription";
import { doneTodo } from "../../api/doneTodo";
import { changeTodoAC, doneTodoAC } from "../../redux/actionTypes/todoActionTypes";
import { DoneIcon } from "../../styles/icons/doneIcon";
import { useStyles } from "./Todo.styles";

export default function Todo({ todo }) {
  const { classes } = useStyles();
  const [editMode, setEditMode] = useState(false);
  const [value, setValue] = useState(todo.description);
  const auth = useSelector((state) => state.userReducer.auth);
  const dispatch = useDispatch();

  const doneHandler = () => {
    doneTodo({ id: todo._id, done: !todo.done });
    dispatch(doneTodoAC({ id: todo._id, done: !todo.done }));
  };
  const changeHandler = () => {
    changeDescriptionTodo({ id: todo._id, description: value });
    dispatch(changeTodoAC({ id: todo._id, description: value }));
    setEditMode(false)
  }
  return (
    <Card className={classes.root}>
      <CardContent>
        {editMode ? (
          <div className={classes.editPannel}>
            <TextField
              required
              id="outlined-required"
              type="email"
              value={value}
              onChange={(event) => {
                setValue(event.target.value);
              }}
            />
            <Button size="small" onClick={changeHandler}>
              <DoneIcon/>
            </Button>
          </div>
        ) : (
          <Typography variant="h5" gutterBottom>
            {todo.description}
          </Typography>
        )}
        <Typography color="text.secondary" component="div">
          {todo.userName}
        </Typography>
        <Typography color="text.secondary">{todo.email}</Typography>
        {todo.done && <Typography color="text.secondary">Выполнено</Typography>}
        {todo.wasEdited && (
          <Typography color="text.secondary">
            Отредактировано администратором
          </Typography>
        )}
      </CardContent>
      {auth && (
        <CardActions className={classes.buttonContainer}>
          <Button size="small" onClick={doneHandler}>
            Done
          </Button>
          <Button size="small" onClick={() => setEditMode(true)}>
            Edit
          </Button>
        </CardActions>
      )}
    </Card>
  );
}
