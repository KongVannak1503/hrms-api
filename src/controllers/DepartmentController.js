const Department = require('../models/DepartmentModel');

// Create a new department
const createDepartment = async (req, res) => {
    try {
        const { name, managerId, description, created_by, updated_by, isActive } = req.body;

        if (!name || !managerId) {
            return res.status(400).json({ message: 'Name and Manager ID are required' });
        }

        // Create a new department instance
        const newDepartment = new Department({
            name,
            managerId,
            description,
            created_by,
            updated_by,
            isActive,
        });

        // Save the new department to the database
        const department = await newDepartment.save();
        res.status(201).json({ message: 'Department created successfully', department });
    } catch (error) {
        res.status(500).json({ message: 'Error creating department', error: error.message });
    }
};

// Get all departments
const getAllDepartments = async (req, res) => {
    try {
        const departments = await Department.find();
        res.status(200).json(departments);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching departments', error: error.message });
    }
};

// Get a department by ID
const getDepartmentById = async (req, res) => {
    try {
        const department = await Department.findById(req.params.id);

        if (!department) {
            return res.status(404).json({ message: 'Department not found' });
        }

        res.status(200).json(department);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching department', error: error.message });
    }
};

// Update a department by ID
const updateDepartment = async (req, res) => {
    try {
        const { name, managerId, description, created_by, updated_by, isActive } = req.body;

        // Find the department by ID and update it
        const department = await Department.findByIdAndUpdate(
            req.params.id,
            { name, managerId, description, created_by, updated_by, isActive },
            { new: true }  // Return the updated document
        );

        if (!department) {
            return res.status(404).json({ message: 'Department not found' });
        }

        res.status(200).json({ message: 'Department updated successfully', department });
    } catch (error) {
        res.status(500).json({ message: 'Error updating department', error: error.message });
    }
};

// Delete a department by ID
const deleteDepartment = async (req, res) => {
    try {
        const department = await Department.findByIdAndDelete(req.params.id);

        if (!department) {
            return res.status(404).json({ message: 'Department not found' });
        }

        res.status(200).json({ message: 'Department deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting department', error: error.message });
    }
};

module.exports = {
    createDepartment,
    getAllDepartments,
    getDepartmentById,
    updateDepartment,
    deleteDepartment,
};
