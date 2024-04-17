const mongoose = require('mongoose');

const studentSchema = mongoose.Schema(
  {
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    mobileNumber: {
        type: Number,
        required: true
    },
    education: {
        type: String,
        required: true
    }
  },{
    timestamps:true
}
);

const Student = mongoose.model("Student_CRUD",studentSchema);
module.exports = Student