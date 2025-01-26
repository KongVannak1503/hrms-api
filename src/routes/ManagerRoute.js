const express = require('express');
const router = express.Router();
const managerController = require('../controllers/ManagerController');

// Create a new department
router.post('/', managerController.createManager);

// Get all departments
router.get('/', managerController.getAllManager);

// Get a department by ID
router.get('/:id', managerController.getManagerById);

// Update a department by ID
router.put('/:id', managerController.updateManager);

// Delete a department by ID
router.delete('/:id', managerController.deleteManager);

module.exports = router;
