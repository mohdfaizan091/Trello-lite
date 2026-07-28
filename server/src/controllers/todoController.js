import Todo from '../model/list.js';

// add task
const createTodo = async (req, res) => {
    try {
        const { title, description } = req.body;

        if (!title) {
            return res.status(400).json({
                success: false,
                message: 'title is required'
            });
        }

        const newTodo = await Todo.create({
            title,
            description,
            user: req.user.id
        });

        return res.status(201).json({
            success: true,
            message: 'todo created successfully',
            data: newTodo
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "server error, could not create todo",
            error: error.message
        });
    }
};

// get all the task
const getTodo = async (req, res) => {
    try {
        const todos = await Todo.find({ user: req.user.id });

        return res.status(200).json({
            success: true,
            message: "todos fetched successfully",
            data: todos
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "server error, could not fetch todos",
            error: error.message
        });
    }
};

// get single todo
const getTodoById = async (req, res) => {
    try {
        const todoById = await Todo.findOne({
            _id: req.params.id,
            user: req.user.id
        });

        if (!todoById) {
            return res.status(404).json({
                success: false,
                message: "todo not found"
            });
        }

        return res.status(200).json({
            success: true,
            message: "todo fetched successfully",
            data: todoById
        });

    } catch (error) {
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

// update todo
const updateTodoById = async (req, res) => {
    try {
        const updatedTodo = await Todo.findOneAndUpdate(
            {
                _id: req.params.id,
                user: req.user.id
            },
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!updatedTodo) {
            return res.status(404).json({
                success: false,
                message: "todo not found"
            });
        }

        return res.status(200).json({
            success: true,
            message: "todo updated successfully",
            data: updatedTodo
        });

    } catch (error) {
        if (error.name === 'CastError') {
            return res.status(400).json({
                success: false,
                message: "invalid id format"
            });
        }

        if (error.name === 'ValidationError') {
            return res.status(400).json({
                success: false,
                message: error.message
            });
        }

        return res.status(500).json({
            success: false,
            message: "server error",
            error: error.message
        });
    }
};

// delete todo
const deleteById = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedTodo = await Todo.findOneAndDelete({
            _id: id,
            user: req.user.id
        });

        if (!deletedTodo) {
            return res.status(404).json({
                success: false,
                message: "todo not found"
            });
        }

        return res.status(200).json({
            success: true,
            message: "todo deleted successfully"
        });

    } catch (error) {
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

export {
    createTodo,
    getTodo,
    getTodoById,
    updateTodoById,
    deleteById
};