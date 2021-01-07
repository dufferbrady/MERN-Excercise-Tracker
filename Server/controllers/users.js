const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

const User = require("../models/User");
const validateRegisterInput = require("../validation/register");
const validateLoginInput = require("../validation/login");

dotenv.config({ path: "./config/config.env" });

const keys = process.env.SECRET_OR_KEY;

// @route POST api/user/register
// @desc Register user
// @access Public
exports.registerUser = async (req, res) => {
  // Form validation
  const { errors, isValid } = validateRegisterInput(req.body);
  console.log(errors, isValid);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      const newUser = new User({
        name: req.body.fullName,
        email: req.body.email,
        password: req.body.password,
      });

      // Hash password before saving in database
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then((user) => {
              console.log(user);
              return res.status(200).json(user);
            })
            .catch((err) => console.log(err));
        });
      });
    }
  });
};

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
exports.loginUser = async (req, res) => {
  // Form validation
  const { errors, isValid } = validateLoginInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const email = req.body.email;
  const password = req.body.password;

  // Find user by email
  User.findOne({ email }).then((user) => {
    // Check if user exists
    if (!user) {
      return res.status(404).json({ emailnotfound: "Email not found" });
    }
    // Check password
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        const payload = {
          id: user.id,
          name: user.name,
        };

        // Sign token
        jwt.sign(
          payload,
          keys,
          {
            expiresIn: 31556926, // 1 year in seconds
          },
          (err, token) => {
            res.status(200).json({
              success: true,
              token: "Bearer " + token,
            });
          }
        );
      } else {
        return res
          .status(400)
          .json({ passwordincorrect: "Password incorrect" });
      }
    });
  });
};

// @desc    Post new user
// @route   POST /user/register
// @access  Public
// exports.registerUser = async (req, res, next) => {
//   try {
//     const { name, email, password1, password2 } = req.body;
//     let errMsg = [];

//     if (!name || !email || !password1 || !password2) {
//       errMsg.push({ msg: "Please fill in all fields" });
//     }

//     if (password1 != password2) {
//       errMsg.push({ msg: "Passwords do not match" });
//     }

//     if (password1.length < 6) {
//       errMsg.push({ msg: "Password must be at least 6 characters" });
//     }

//     console.log(errMsg);
//     console.log(res.success);

//     if (errMsg.length > 0) {
//       return res.status(400).send({
//         success: false,
//         message: errMsg,
//       });
//     } else {
//       const user = await User.create(req.body);
//       return res.status(201).json({
//         success: true,
//         data: user,
//       });
//     }
//   } catch (error) {
//     if (error.name === "ValidationError") {
//       const messages = Object.values(error.errors).map(
//         (valError) => valError.message
//       );

//       return res.status(400).json({
//         success: false,
//         message: messages,
//       });
//     } else {
//       return res.status(500).json({
//         success: false,
//         message: "Server Failure",
//       });
//     }
//   }
// };
