const User = require("../models/User");

// @desc    Post new user
// @route   POST /user/register
// @access  Public
exports.registerUser = async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    return res.status(201).json({
      success: true,
      data: user,
    });
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
