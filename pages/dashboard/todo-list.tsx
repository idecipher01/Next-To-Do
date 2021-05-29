import React from "react";
import { TextField } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
  })
);

const TodoList = () => {
  const classes = useStyles();

  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          required
          id="standard-required"
          label="Required"
          defaultValue="Hello World"
        />
      </form>
    </div>
  );
};

export default TodoList;
