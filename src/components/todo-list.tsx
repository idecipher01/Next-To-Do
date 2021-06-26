import React, { useEffect } from "react";
import { TextField } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { FormControl } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";

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

interface id {
  id: number;
}

const TodoList = (props: any) => {
  const classes = useStyles();
  const [checked, setChecked] = React.useState<number[]>([]);

  const handleToggle = (value: number) => () => {
    props.handleComplete(value)
  };


  return (
    <div>
      <div>
        <List className={classes.root}>
          {props?.renderList?.map((value: any) => {
            const labelId = `checkbox-list-label-${value.id}`;

            return (
              <ListItem
                key={value.id}
                role={undefined}
                dense
                button
                onClick={handleToggle(value.id)}
              >
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={value.completed}
                    disableRipple
                    // value={value}
                    inputProps={{ "aria-labelledby": labelId }}
                    // onChange={(e)=>{handleChange(e,value)}}
                  />
                </ListItemIcon>
                <ListItemText id={labelId} primary={` ${value.task}`} />
              </ListItem>
            );
          })}
        </List>
      </div>
    </div>
  );
};

export default TodoList;
