// routes/tools.js
const express = require('express');
const router = express.Router();
const Tool = require('../models/Tool');

// Get all tools
router.get('/', async (req, res) => {
    try {
        const tools = await Tool.find();
        res.json(tools);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Add a new tool
router.post('/', async (req, res) => {
    const tool = new Tool({
        toolName: req.body.toolName,
        quantity: req.body.quantity
    });
    try {
        const newTool = await tool.save();
        res.status(201).json(newTool);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
