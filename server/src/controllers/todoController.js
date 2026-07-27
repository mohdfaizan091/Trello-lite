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
            message: "server error, could not create todo",
            error: error.message 
        });
    }
}

// get all the task
const getTodo = async (req, res) => {
    try {
        const todos = await Todo.find();
        return res.status(200).json({
            success: true,
            message: "todos fetched successfully",
            data: todos
        });
    } catch(error) {
        return res.status(500).json({
            success: false,
            message : "server error, could not fetch list",
            error : error.message 
        });
    }
};

// getting all the task for each user seprately


const getTodoById = async (req, res) => {
    try {
        const todoByid = await Todo.findById(req.params.id);
        if(!todoByid) {
            return res.status(404).json({
                success: false,
                message: "id is not defined"
            });
        }
        return res.status(200).json({
            success: true,
            message: "todo fetched successfully",
            data: todoByid
        });
    } catch(error) {
        if (error.name === 'CastError') {
        return res.status(400).json({
            success: false,
            message: "invalid id format"
        });
    }
    return res.status(500).json({
        success: false,
        message: "server error",
        error: error.message
    });
    }
};

export { createTodo, getTodo, getTodoById };