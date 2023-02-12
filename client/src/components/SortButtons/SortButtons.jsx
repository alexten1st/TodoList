import { Button, Typography } from "@mui/material";
import { useEffect } from "react";
import { useStyles } from "./SortButtons.styles";

export default function SortButtons({
  sortButtonsState,
  setSortButtonsState,
  initialSortState,
}) {
  const { classes } = useStyles();
  const sortHandler = (value) => {
    setSortButtonsState((prev) => {
      const state = prev.find((state) => state.value === value);
      const newType =
        state.type === "" ? "asc" : state.type === "asc" ? "desc" : "";
      return [
        ...initialSortState.filter((state) => state.value !== value),
        { value, type: newType },
      ];
    });
  };
  const getArrow = (value)=> {
    const type = sortButtonsState.find(state => state.value === value).type;
    return type === "asc" ? "↑" : type === "desc" ? "↓" : null
  }
  return (
    <div className={classes.sortButtonsContainer}>
      <Typography>Сортировать:</Typography>
      <Button
        variant="contained"
        // className={classes.addTodoBtn}
        onClick={()=>sortHandler("byName")}
      >
        По имени {getArrow("byName")}
      </Button>
      <Button variant="contained" onClick={()=>sortHandler("byEmail")}>
        По email {getArrow("byEmail")}
      </Button>
      <Button variant="contained" onClick={()=>sortHandler("byDone")}>
        По статусу {getArrow("byDone")}
      </Button>
    </div>
  );
}
