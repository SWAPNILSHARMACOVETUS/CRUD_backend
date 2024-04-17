const express = require('express');
const router = express.Router();
const { createStudent } = require('../Controllers/studentController.js');

router.post('/add-student',createStudent);

module.exports = router