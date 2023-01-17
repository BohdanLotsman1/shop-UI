import { makeStyles } from "@material-ui/core";
import { Theme } from "@mui/material";

export const useStyles = makeStyles((theme: Theme) => ({
  wrapper: {
    height: "calc(100vh - 70px)",
    width: "100%",
    padding: theme.spacing(2),
    boxSizing: "border-box",
  },
  header: {
    height: 70,
    width: "100vw",
    padding: theme.spacing(2, 3),
    boxSizing: "border-box",
    background: "#ACACAC",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  mainTitle: {
    fontSize: 34,
    cursor: "pointer",
    userSelect: "none",
    whiteSpace: "nowrap",
    marginRight: 10,
    "&:hover": {
      color: "white",
    },
    [theme.breakpoints.down(615)]: {
      fontSize: 20,
    },
  },
  optionsContainer: {
    display: "flex",
  },
  option: {
    padding: theme.spacing(0, 1),
    cursor: "pointer",
    "&:hover": {
      fill: "white",
    },
  },
  search: {
    maxWidth: 550,
    marginRight: theme.spacing(1),
    "& .MuiOutlinedInput-notchedOutline ": {
      border: "1px solid black",
    },
    "& .Mui-focused": {
      "& .MuiOutlinedInput-notchedOutline": {
        border: "2px solid black !important",
      },
    },

    "& .MuiOutlinedInput-input": {
      padding: "13px 14px",
    },
  },
  searchContainer: {
    display: "flex",
    width: "inherit",
    justifyContent: "center",
  },
  button: {
    textTransform: "none",
    padding: theme.spacing(0, 2),
    background: "#2f8532",
    color: "white",
    "&:hover": {
      background: "#6dbd70",
    },
  },
}));
