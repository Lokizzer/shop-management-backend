const express = require('express');
const router = express.Router();

// Mock data for demonstration
let tools = [
    { toolName: 'Hammer', quantity: 50 },
    { toolName: 'Wrench', quantity: 30 }
];

// Get all tools
router.get('/', (req, res) => {
    res.json(tools);
});

// Add a new tool
router.post('/', (req, res) => {
    const newTool = req.body;
    tools.push(newTool);
    res.status(201).json(newTool);
});

module.exports = router;
