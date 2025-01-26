const mongoose = require('mongoose');

const DepartmentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    isActive: { type: Boolean, default: false },
    createdBy: { type: Number },
    updatedBy: { type: Number },
}, { timestamps: true });

module.exports = mongoose.model('manager', DepartmentSchema);
