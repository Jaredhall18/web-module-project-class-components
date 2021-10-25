import React from "react";
import Todo from "./Todo"

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

const TodoList = props => {

    return (
        <div>
            <h2>All Tasks from Todo will show up below</h2>
            {props.tasks.map(item => (
                <Todo key={item.id} item={item} handleToggle={props.handleToggle}/>
            ))}
            
        </div>
    )

};

export default TodoList;