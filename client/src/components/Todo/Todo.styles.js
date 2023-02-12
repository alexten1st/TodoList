import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => ({
  root: {
    marginBottom: theme.spacing(4),
    padding: theme.spacing(2, 20),
    border: "1px solid grey"
  },
  buttonContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around"
  },
  editPannel: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
}));
