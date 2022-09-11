const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
require("dotenv").config();
const connectDB = require("./database/db");
const userRouter = require("./routes/user");

// Connect to database
connectDB();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", userRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
