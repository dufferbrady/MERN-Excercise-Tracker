const User = require("../models/User");

// @desc    Post new user
// @route   POST /user/register
// @access  Public
exports.registerUser = async (req, res, next) => {
  try {
    const { name, email, password1, password2 } = req.body;
    let errMsg = [];

    if (!name || !email || !password1 || !password2) {
      errMsg.push({ msg: "Please fill in all fields" });
    }

    if (password1 != password2) {
      errMsg.push({ msg: "Passwords do not match" });
    }

    if (password1.length < 6) {
      errMsg.push({ msg: "Password must be at least 6 characters" });
    }

    console.log(errMsg);
    console.log(res.success);

    if (errMsg.length > 0) {
      return res.status(400).send({
        success: false,
        message: errMsg,
      });
    } else {
      const user = await User.create(req.body);
      return res.status(201).json({
        success: true,
        data: user,
      });
    }
  } catch (error) {
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map(
        (valError) => valError.message
      );

      return res.status(400).json({
        success: false,
        message: messages,
      });
    } else {
      return res.status(500).json({
        success: false,
        message: "Server Failure",
      });
    }
  }
};
