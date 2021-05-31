import React from "react";
import { TextField } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { FormControl } from "@material-ui/core";

import TodoList from './todo-list';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        // width: "25ch",
      },
    },
  })
);

const AddTodo = () => {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off">
        <FormControl fullWidth>
          <TextField
            required
            id="standard-required"
            label="Required"
            placeholder="+ Add Task"
          />
        </FormControl>
      </form>
      <TodoList/>
    </div>
  );
};

export default AddTodo;
