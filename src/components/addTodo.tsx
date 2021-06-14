import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { FormControl, Button } from "@material-ui/core";
import TodoList from "../../src/components/todo-list";
import SaveIcon from "@material-ui/icons/Save";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        // width: "25ch",
      },
    },
    button: {
      margin: theme.spacing(1),
    },
  })
);

const AddTodo = (props:any) => {
  const classes = useStyles();

  const [newTodo, setTodo] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    try {
      console.log(props.todolist)
      if (!props.todolist||props.todolist.length===0) {
        let newtodo = {
          id:1,
          task:newTodo,
          completed:false
        }
        let newtodos = [newtodo]
        localStorage.setItem("todos",JSON.stringify(newtodos));
      }
      else{
        let lasttodoId = props.todolist[props.todolist.length-1].id;
        let newtodo = {
          id:lasttodoId+1,
          task:newTodo,
          completed:false
        }
        props.todolist.push(newtodo);
        localStorage.setItem("todos",JSON.stringify(props.todolist));
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e: any) => {
    setTodo(e.target.value);
  };

  console.log(props.todolist)

  return (
    <div>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={(e) => handleSubmit(e)}
      >
        <FormControl>
          <TextField
            required
            id="standard-required"
            label="Required"
            placeholder="+ Add Task"
            onChange={(e) => handleChange(e)}
          />
        </FormControl>

        <Button
          variant="contained"
          color="primary"
          size="small"
          className={classes.button}
          startIcon={<SaveIcon />}
          onClick={(e) => handleSubmit(e)}
        >
          Save
        </Button>
      </form>
      <TodoList renderList={props.todolist}/>
    </div>
  );
};

export default AddTodo;
