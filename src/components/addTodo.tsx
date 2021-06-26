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
      props.handleAddTodo(newTodo);
      setTodo("")
  };

  const handleChange = (e: any) => {
    e.preventDefault();
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
            defaultValue={newTodo}
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
      <TodoList renderList={props?.todolist?.filter((t:any)=>{
        return t.completed !==true
      })} handleComplete={props.handleComplete}/>
    </div>
  );
};

export default AddTodo;
