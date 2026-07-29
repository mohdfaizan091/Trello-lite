import { useState, useEffect } from 'react';
import TaskItem from './TaskItem';
import CreateTask from './CreateList';

function TaskList() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem('token');
        fetch('http://localhost:3000/api/tasks', {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then(res => res.json())
            .then(data => setTasks(data.data));
    }, []);

    const handleTaskCreated = (newTask) => {
        setTasks([...tasks, newTask]);
    };

    const handleDelete = (deletedId) => {
        setTasks(tasks.filter(task => task._id !== deletedId));
    };

    return (
        <div>
            <CreateTask onTaskCreated={handleTaskCreated} />
            {tasks.length === 0 ? (
                <p>No tasks yet. Create your first task!</p>
            ) : (
                tasks.map(task => (
                    <TaskItem
                        key={task._id}
                        id={task._id}
                        title={task.title}
                        description={task.description}
                        status={task.status}
                        onDelete={handleDelete}
                    />
                ))
            )}
        </div>
    );
}

export default TaskList;