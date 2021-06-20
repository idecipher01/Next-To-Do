import Head from "next/head";
import { useState, useEffect } from "react";
import {
  createStyles,
  makeStyles,
  useTheme,
  Theme,
} from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Header from "../../src/components/header";
import Sidebar from "../../src/components/sidebar";
import AddTodo from "../../src/components/addTodo";
import CompletedTodo from "../../src/components/completed";
import AllTodo from "../../src/components/all-todos";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  })
);

export default function Home() {
  const classes = useStyles();
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    try {
      let todos = localStorage.getItem("todos");
      console.log(todos);
      if (todos) setTodos(JSON.parse(todos));
    } catch (err) {
      console.log(err);
    }
  }, []);
  return (
    <div className={classes.root}>
      <Head>
        <title> Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Router>
        <Sidebar />

        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Switch>
            <Route path='/'>
              <AddTodo todolist={todos} />
            </Route>
            <Route path='/all-todo'>
              <AllTodo todolist={todos} />
            </Route>
            <Route path='/completed-todo'>
              <CompletedTodo todolist={todos} />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}
