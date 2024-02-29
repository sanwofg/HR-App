const { registration } = require("../models/registerationSchema");
const { registrationJoi } = require("../validators/joiValidation");

const registerUser = async (req, res) => {
  try {
    // Validate the request body using Joi schema
    const { error } = registrationJoi.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    // const { certificateFile, idCard } = req.files;

    const newRegistration = new registration({
      fullName: req.body.fullName,
      dob: req.body.dob,
      selectedGender: req.body.selectedGender,
      address: req.body.address,
      state: req.body.state,
      lga: req.body.lga,
      phoneNumber: req.body.phoneNumber,
      nin: req.body.nin,
      // certificateFile: certificateFile[0].path,
      educationalQualification: req.body.educationalQualification,
      // idCard: idCard[0].path,
      preferredCourse: req.body.preferredCourse,
    });

    await newRegistration.save();

    res.status(201).json({ message: "Registration successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = registerUser;
