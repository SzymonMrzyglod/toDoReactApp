import React, {Component} from 'react';
import AddTask from './components/AddTask/AddTask';
import TaskList from './components/TaskList/TaskList';
import './App.css';

class App extends Component{
  counter = 6;
  state={
    tasks: [
      {
        id: 0,
        text: 'ZZZZZZZZZZZZZZZZZZZ',
        date: '2018-02-15',
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 1,
        text: 'SSSSSSSSSSSSSSSSSSSS',
        date: '2018-02-15',
        important: false,
        active: true,
        finishDate: null
      },
      {
        id: 2,
        text: 'AAAAAAAAAAAAAAAAAAAA',
        date: '2018-02-15',
        important: false,
        active: true,
        finishDate: null
      },
      {
        id: 3,
        text: 'aaaaaaaaaaaaaa',
        date: '2018-02-15',
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 4,
        text: 'bbbbbbbbbbbbbbbb',
        date: '2018-02-15',
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 5,
        text: 'Zagrać w Wiedźmina',
        date: '2018-02-15',
        important: true,
        active: true,
        finishDate: null
      }
    ]
  }
  deleteTask = (id) => {
    let tasks = [...this.state.tasks];
    tasks = tasks.filter(task => (
      task.id !== id
    ))
        this.setState({
      tasks
    })
  }
  changeTaskStatus = (id) => {
    const tasks = [...this.state.tasks];
    tasks.forEach(task => {
      if(task.id === id){
        task.active = false;
        task.finishDate = new Date().getTime();
      }
    })
    this.setState({
      tasks,
    })
  }
  addTask = (text, date, important) => {
    const task = {
      id: this.counter,
      text,
      date,
      important,
      active: true,
      finishDate: null
    }
    this.counter++;
    this.setState(prevState => ({
      tasks: [...prevState.tasks, task]
    }))
    return true;
  }
  render(){
    return (
      <div className="App">
        <h1>TO DO APP</h1>
        <AddTask add={this.addTask}/>
        <TaskList tasks={this.state.tasks} delete={this.deleteTask} change={this.changeTaskStatus}/>
      </div>
    );
  }
}

export default App;
