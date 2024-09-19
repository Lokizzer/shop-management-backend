// models/Tool.js
const mongoose = require('mongoose');

const ToolSchema = new mongoose.Schema({
    toolName: String,
    quantity: Number
});

module.exports = mongoose.model('Tool', ToolSchema);
