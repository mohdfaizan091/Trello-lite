function TaskItem({ id, title, description, status, onDelete }) {
    const handleDelete = () => {
        const token = localStorage.getItem('token');

        fetch(`http://localhost:3000/api/tasks/${id}`, {
            method: 'DELETE',
            headers: { Authorization: `Bearer ${token}` }
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    onDelete(id);
                }
            });
    };

    const handleStatusChange = (e) => {
        const newStatus = e.target.value;
        const token = localStorage.getItem('token');

        fetch(`http://localhost:3000/api/tasks/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({ status: newStatus })
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    onStatusChange(id, newStatus);
                }
            });
    };

    return (
         <div style={{ border: '1px solid gray', padding: '10px', margin: '8px 0' }}>
            <h3>{title}</h3>
            <p>{description}</p>
            <select value={status} onChange={handleStatusChange}>
                <option value="pending">pending</option>
                <option value="in-progress">in-progress</option>
                <option value="completed">completed</option>
            </select>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
}

export default TaskItem;