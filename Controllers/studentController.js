const studentModel = require('../Models/studentModel.js');

const createStudent = async (req,res) => {
    try {
        const _student = await studentModel.create(req.body);
        res.status(200).json(_student);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createStudent
}