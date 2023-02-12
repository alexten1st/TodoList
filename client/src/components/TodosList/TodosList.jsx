import { Button, Container, Pagination, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Todo from "../Todo/Todo";
import { useStyles } from "./TodosList.styles";
import { getTodos } from "../../api/getTodos";
import AddTodoModal from "../TodoModal/TodoModal";
import { useDispatch, useSelector } from "react-redux";
import SortButtons from "../SortButtons/SortButtons";

export default function TodosList() {
  const { classes } = useStyles();
  const initialSortState = [
    { value: "byName", type: "" },
    { value: "byDone", type: "" },
    { value: "byEmail", type: "" },
  ]
  const [showModal, setShowModal] = useState(false);
  const [sortButtonsState, setSortButtonsState] = useState(initialSortState);

  const [page, setPage] = useState(1);
  const todos = useSelector((state) => state.todosReducer);
  const totalPages = useSelector((state) => state.metaReducer.totalPages);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos(page - 1, sortButtonsState.find(state => state.type)));
  }, [dispatch, page, sortButtonsState]);

  return (
    <>
      <Container>
        <Button
          className={classes.addTodoBtn}
          onClick={() => setShowModal(true)}
        >
          Add Todo
        </Button>
        <SortButtons
          sortButtonsState={sortButtonsState}
          setSortButtonsState={setSortButtonsState}
          initialSortState={initialSortState}
        />
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
