const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoListSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    }
}, {
    timestamps: true
});

const Todo = mongoose.model('Todo', todoListSchema);

module.exports = Todo;