const express = require('express');
const router = express.Router();
const departmentController = require('../controllers/DepartmentController');

// Create a new department
router.post('/', departmentController.createDepartment);

// Get all departments
router.get('/', departmentController.getAllDepartments);

// Get a department by ID
router.get('/:id', departmentController.getDepartmentById);

// Update a department by ID
router.put('/:id', departmentController.updateDepartment);

// Delete a department by ID
router.delete('/:id', departmentController.deleteDepartment);

module.exports = router;
