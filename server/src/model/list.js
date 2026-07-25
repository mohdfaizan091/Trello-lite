import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    status: {
        type: String,
        enum: ['pending', 'in-progress', 'completed'],
        default : 'pending'
    },
    description: {
        type: String
    }
},
    { timestamps: true });

const Todo = mongoose.model('Todo', todoSchema);

export default Todo; 