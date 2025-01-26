const Manager = require('../models/ManagerModel');

// Create a new manager
const createManager = async (req, res) => {
    try {
        const { name, created_by, updated_by, isActive } = req.body;

        if (!name) {
            return res.status(400).json({ message: 'Name and Manager ID are required' });
        }

        // Create a new manager instance
        const newManager = new Manager({
            name,
            created_by,
            updated_by,
            isActive,
        });

        // Save the new manager to the database
        const manager = await newManager.save();
        res.status(201).json({ message: 'manager created successfully', manager });
    } catch (error) {
        res.status(500).json({ message: 'Error creating manager', error: error.message });
    }
};

// Get all managers
const getAllManager = async (req, res) => {
    try {
        const managers = await Manager.find();
        res.status(200).json(managers);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching manager', error: error.message });
    }
};

// Get a manager by ID
const getManagerById = async (req, res) => {
    try {
        const manager = await Manager.findById(req.params.id);

        if (!manager) {
            return res.status(404).json({ message: 'manager not found' });
        }

        res.status(200).json(manager);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching manager', error: error.message });
    }
};

// Update a manager by ID
const updateManager = async (req, res) => {
    try {
        const { name, managerId, description, created_by, updated_by, isActive } = req.body;

        // Find the manager by ID and update it
        const manager = await Manager.findByIdAndUpdate(
            req.params.id,
            { name, managerId, description, created_by, updated_by, isActive },
            { new: true }  // Return the updated document
        );

        if (!manager) {
            return res.status(404).json({ message: 'manager not found' });
        }

        res.status(200).json({ message: 'manager updated successfully', manager });
    } catch (error) {
        res.status(500).json({ message: 'Error updating manager', error: error.message });
    }
};

// Delete a manager by ID
const deleteManager = async (req, res) => {
    try {
        const manager = await Manager.findByIdAndDelete(req.params.id);

        if (!manager) {
            return res.status(404).json({ message: 'manager not found' });
        }

        res.status(200).json({ message: 'manager deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting manager', error: error.message });
    }
};

module.exports = {
    createManager,
    getAllManager,
    getManagerById,
    updateManager,
    deleteManager,
};
