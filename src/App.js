import React, {Component} from 'react';
import AddTask from './components/AddTask/AddTask';
import TaskList from './components/TaskList/TaskList';
import './App.css';

class App extends Component{
  state={
    tasks: [
      {
        id: 0,
        text: 'Zagrać w Wiedźmina',
        date: '2018-02-15',
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 1,
        text: 'Zagrać w Wiedźmina',
        date: '2018-02-15',
        important: false,
        active: true,
        finishDate: null
      },
      {
        id: 2,
        text: 'Zagrać w Wiedźmina',
        date: '2018-02-15',
        important: false,
        active: true,
        finishDate: null
      },
      {
        id: 3,
        text: 'Zagrać w Wiedźmina',
        date: '2018-02-15',
        important: true,
        active: true,
        finishDate: null
      },
    ]
  }
  deleteTask = (id) => {
    let tasks = [...this.state.tasks]; //KOPIA TABLICY TASKS
    tasks = tasks.filter(task => (
      task.id !== id
    ))
        this.setState({
      tasks
    })
  }
  changeTaskStatus = (id) => {
    console.log('change w App id' + id);
  }
  render(){
    return (
      <div className="App">
        to do app
        <AddTask />
        <TaskList tasks={this.state.tasks} delete={this.deleteTask} change={this.changeTaskStatus}/>
      </div>
    );
  }
}

export default App;
