import React from 'react';
import './Todo.css'
import {List, ListItemText, ListItem } from '@material-ui/core';


function Todo(props) {

    return (
        <div>  
            <List>
                <ListItem> 
                <ListItemText primary="Todo" align="center" secondary={props.text}/>
                </ListItem>
            </List>
            
        </div>
    )
}

export default Todo
