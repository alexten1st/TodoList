import { Button, Container, Pagination, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Todo from "../Todo/Todo";
import { useStyles } from "./TodosList.styles";
import { getTodos } from "../../api/getTodos";
import AddTodoModal from "../TodoModal/TodoModal";
import { useDispatch, useSelector } from "react-redux";

export default function TodosList() {

  const { classes } = useStyles();

  const [showModal, setShowModal] = useState(false);
  const [page, setPage] = useState(1);

  const todos = useSelector((state) => state.todosReducer);
  const totalPages = useSelector((state) => state.metaReducer.totalPages);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getTodos(page-1));
  }, [dispatch, page]);
  
  return (
    <>
      <Container>
        <Button
          className={classes.addTodoBtn}
          onClick={() => setShowModal(true)}
        >
          Add Todo
        </Button>
        <div className={classes.sortButtonsContainer}>
          <Typography>Сортировать:</Typography>
        <Button
          // className={classes.addTodoBtn}
          // onClick={() => setShowModal(true)}
        >
          По имени
        </Button>
        <Button
          // className={classes.addTodoBtn}
        >
          По email
        </Button>
        <Button
          // className={classes.addTodoBtn}
        >
          По статусу
        </Button>
        </div>
        <Container>
          {todos.length
            ? todos.map((todosItem) => (
                <Todo key={todosItem._id} todo={todosItem} />
              ))
            : null}
        </Container>
        <Pagination
          className={classes.pagination}
          count={totalPages}
          page={page ?? 1}
          onChange={(_, number) => setPage(number)}
        />
      </Container>
      {showModal && (
        <AddTodoModal
          hideModel={() => {
            setShowModal(false);
          }}
          count={totalPages}
          page={page}
        />
      )}
    </>
  );
}
