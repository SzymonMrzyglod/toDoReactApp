import React from 'react';
import Task from '../Task/Task';

const TaskList = (props) => {
    const tasks = props.tasks.map(task => (
        <Task 
            task={task}
            key = {task.id}
        />
        ))
    return (
        <>
            <div className='active'>
                <h1>Zadania do zrobienia</h1>
                {tasks}
            </div>
            <hr />
            <div className='done'>
                <h2>Zadania zrobione (0)</h2>
            </div>
        </>
      );
}
 
export default TaskList;