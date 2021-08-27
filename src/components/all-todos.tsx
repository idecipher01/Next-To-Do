import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import TodoList from '../../src/components/todo-list';

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

const AllTodo = (props:any) => {
  const classes = useStyles();

  return (
    <div>
      <h2>All </h2>
      <TodoList renderList={props.todolist} handleComplete={props.handleComplete}/>
    </div>
  );
};

export default AllTodo;
