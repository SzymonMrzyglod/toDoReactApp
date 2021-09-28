import React from 'react';
import Task from '../Task/Task';

const TaskList = (props) => {
    const active = props.tasks.filter(task => task.active)
    const done = props.tasks.filter(task => !task.active)

    // done.sort((a, b) => {
    //     return b.date - a.date
    // })
    if(done.length>= 2){
        done.sort((a,b) => {
            if(a.finishDate > b.finishDate){
                return 1
            }
            if(a.finishDate < b.finishDate){
                return -1
            }
            return 0
        })
    }

    if(active.length >=2){
        active.sort((a,b) => {
            a=a.text.toUpperCase();
            b=b.text.toUpperCase();
            if(a < b){
                return -1
            }
            if(a > b){
                return 1
            }
            return 0;
        })
    }

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