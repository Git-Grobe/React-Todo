import React from "react";
import ReactDOM from "react-dom";

import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import './styles.css'

const data = [
  {
    name: "Bananas",
    id: 123,
    purchased: false
  },
  {
    name: "Torillas",
    id: 124,
    purchased: false
  },
  {
    name: "Milk",
    id: 1235,
    purchased: false
  },
  {
    name: "Pizza Sauce",
    id: 1246,
    purchased: false
  },
  {
    name: "Raw Honey",
    id: 1237,
    purchased: false
  },
  {
    name: "Granola",
    id: 1248,
    purchased: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todoList: data
    };  
  };

  togglePurchased = itemId => {
    console.log("togglepurchased", itemId);
    this.setState({
      todoList: this.state.todoList.map(item => {
        if (item.id === itemId) {
          return {
            ...item,
            purchased: !item.purchased
          };
        }
        return item;
      })
    })
  }

  addItem = itemName => {
    console.log("add item", itemName);
    this.setState({
      todoList: [
        ...this.state.todoList,
        {
          name: itemName,
          id: this.state.todoList.length +1,
          purchased: false
        }
      ]
    })
    console.log(this.state.todoList, 'list')
  }
  

  clearPurchased = () => {
    console.log('clear purchased');
    this.setState({
      todoList: this.state.todoList.filter(item => {
        return !item.purchased;
      })
    });
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Todo List</h1>
          <TodoForm addItem={this.addItem}/>
        </div>
        <TodoList todos={this.state.todoList} togglePurchased={this.togglePurchased} clearPurchased={this.clearPurchased} />
      </div>
    );
  }
}

export default App;
