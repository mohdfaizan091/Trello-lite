import { useState, useEffect } from 'react';

function TaskList() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/tasks')
        .then(res => res.json())
        .then(data => setTasks(data.data))
    }, []);

    return (
        <div>
            {tasks.map(task => (
                <p key ={task._id}>{task.title}</p>
            ))}
        </div>
    );
}

export default TaskList;