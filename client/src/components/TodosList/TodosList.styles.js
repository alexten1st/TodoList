import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => ({
  addTodoBtn: {
    alignSelf: "flex-end",
  },
  sortButtonsContainer: {
    display: "flex",
    alignItems: "center"
  }
}));
