import Todo from '../model/list.js'; 

export const createTodo = async (req, res) => {
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