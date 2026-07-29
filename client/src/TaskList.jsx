import { useState, useEffect } from 'react';
import TaskItem from './TaskItem.jsx';

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
                <TaskItem
                    key={task._id}
                    title={task.title}
                    description={task.description}
                    status={task.status}
                />
            ))}
        </div>
    );
}

export default TaskList;