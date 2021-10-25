import React from 'react';
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

const tasks = [
  {
    name: 'Mow Lawn',
    id: 123,
    completed: false
  },
  {
    name: 'Feed Dog',
    id: 124,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      tasks:tasks
    }
  }

  //Toggle Task when Clicked
  handleToggle = (id) => {
     //1. have a copy of state.
    //2. set tasks slice of state
    //3. find the item that I clicked on
    //4. flip the value of completed for that item
    //5. leave all the other items alone.

    this.setState({
      ...this.state,
      tasks: this.state.tasks.map(item=> {
        if (item.id === id) {
          return ({
            ...item,
            completed: !item.completed
          });
        } else {
          return item;
        }
      })
    });
  }

  //Add Item
  handleAddItem = (name)=> {
    const newTask = {
      task : name,
      id: Date.now(),
      completed: false
    }

    this.setState({
      ...this.state,
      tasks: [...this.state.tasks, newTask]
    });
  }

  //Clear Completed Tasks
  handleClear = () => {
    this.setState({
      ...this.state,
      tasks:this.state.tasks.filter(item => {
      return(!item.completed);
     })
    });
  }
  
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList tasks={this.state.tasks} handleToggle={this.handleToggle}/>
        <TodoForm handleAddItem={this.handleAddItem} handleClear={this.handleClear}/>
      </div>
    );
  }
}

export default App;
