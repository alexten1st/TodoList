import { padding } from "@mui/system";
import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => ({
  root: {
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    position: "fixed",
    top: "0",
    right: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  form: {
    backgroundColor: theme.palette.secondary.main,
    padding: theme.spacing(8),
    borderRadius: theme.spacing(6),
    
  },
  btnContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: theme.spacing(4)
  }
}));
