function TaskItem({ title, description, status }) {
    return (
        <div style={{border: '1px solid gray', padding: '10px', margin: '8px 0'}}>
            <h3>{title}</h3>
            <p>{description}</p>
            <p>Status: {status}</p>
        </div>
    );
}

export default TaskItem;