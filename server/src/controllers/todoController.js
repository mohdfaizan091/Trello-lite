import Todo from '../model/list.js'; 


// add task
const createTodo = async (req, res) => {
    try {
        const {title, description} = req.body;
        if(!title) {
            return res.status(400).json({
            success: false,
            message: 'title is missing' 
        });
        }
        const newTodo = await Todo.create({title, description});
        return res.status(201).json({
            success: true,
            message: 'todo create succesfully',
            data: newTodo
        });
    } catch(error) {
        return res.status(500).json({
            success: false,
            message: error.message 
        });
    }
}

// get all the task
const getTodo = async (req, res) => {
    try {
        const todos = await Todo.find();
        res.status(200).json(todos)
    } catch(error) {
        res.status(500).json({
            message : "server error, could not fetch list",
            error : error.message 
        });
    }
};

export { createTodo, getTodo }