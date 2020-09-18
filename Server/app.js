const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const cors = require("cors");

const home = require("./Routes/Home");
const users = require("./Routes/Users");

//Connect to mongoDB
connectDB();

dotenv.config({ path: "./config/config.env" });

const app = express();

app.use(express.json());
app.use(cors());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use("/", home);
app.use("/users", users);

const PORT = process.env.port || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.magenta
      .bold
  )
);
