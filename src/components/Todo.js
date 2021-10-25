import React from 'react';

const Todo = props => {

    const handleClick = () => {
        console.log('clicked Item', props.item.task)
        props.handleToggle(props.item.id);
    }

    return (
        <div onClick={handleClick} className={`item${props.item.completed ? 'completed' : ''}`} >
            <p>{props.item.task}</p>
        </div>
    )
};

export default Todo;