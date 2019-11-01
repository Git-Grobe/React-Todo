import React from "react";

import Todo from "./Todo";

const TodoList = props => {
    return(
        <div>
            {props.todos.map(item => (
                <Todo key={item.id} item={item} togglePurchased={props.togglePurchased} />
            ))}
            <button onClick={props.clearPurchased}>
                Clear Completed
            </button>
        </div>
    );
}

export default TodoList;