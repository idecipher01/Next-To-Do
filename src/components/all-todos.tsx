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
  // const [checked, setChecked] = React.useState([0]);

  // const handleToggle = (value: number) => () => {
  //   const currentIndex = checked.indexOf(value);
  //   const newChecked = [...checked];

  //   if (currentIndex === -1) {
  //     newChecked.push(value);
  //   } else {
  //     newChecked.splice(currentIndex, 1);
  //   }

  //   setChecked(newChecked);
  // };

  return (
    <div>
      <TodoList renderList={props.todolist}/>
    </div>
  );
};

export default AllTodo;