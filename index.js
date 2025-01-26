const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require('cors');
const dbConfig = require("./src/config/db");
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const departmentRoutes = require('./src/routes/DepartmentRoute');
const managerRoutes = require('./src/routes/ManagerRoute');

// Middleware
app.use(express.json());
app.use(cors());

//api
app.use('/api/department', departmentRoutes);
app.use('/api/manager', managerRoutes);



const PORT = process.env.PORT || 5000;


dbConfig()
    .then(() => {
        console.log("Database connected successfully");

        // Start the server
        app.listen(PORT, () => {
            console.log(`Server is running on port http://localhost:${PORT}`);
        });
    })
    .catch((err) => {
        console.error("Failed to connect to the database:", err.message);
    });
