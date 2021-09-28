import React from 'react';
import Task from '../Task/Task';

const TaskList = (props) => {
    const active = props.tasks.filter(task => task.active)
    const done = props.tasks.filter(task => !task.active)
    const activeTasks = active.map(task => (
        <Task 
            task={task}
            key = {task.id}
            delete={props.delete} 
            change={props.change}
        />
        ))
        const doneTasks = done.map(task => (
            <Task 
                task={task}
                key = {task.id}
                delete={props.delete} 
                change={props.change}
            />
            ))
    return (
        <>
            <div className='active'>
                <h1>Zadania do zrobienia</h1>
                {activeTasks.length > 0 ? activeTasks : 'Wszystkie zadania wykonane!'}
            </div>
            <hr />
            <div className='done'>
                <h2>Zadania zrobione ({done.length})</h2>
                {done.length > 5 && <span>Wyświetlonych jest 5 ostatnich zadań</span>}
                {doneTasks.slice(0,5)}
            </div>
        </>
      );
}
 
export default TaskList;