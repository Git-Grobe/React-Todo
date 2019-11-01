import React from "react";

const Todo = props => {

    const handleClick = e => {
        e.preventDefault();
        props.togglePurchased(props.item.id);
    };

    return(
        <div onClick={handleClick} className={`item${props.item.purchased ? ' purchased' : ''}`}>
            <p>{props.item.name}</p>
        </div>
    );
}

export default Todo;