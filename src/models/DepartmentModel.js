const mongoose = require('mongoose');

const DepartmentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    managerId: { type: String, required: true },
    description: { type: String },
    isActive: { type: Boolean, default: false },
    createdBy: { type: Number },
    updatedBy: { type: Number },
}, { timestamps: true });

module.exports = mongoose.model('department', DepartmentSchema);
