require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();

const messageRoutes = require("./routes/messageRoutes");
const studentRoutes = require("./routes/studentRoutes");
const connectDB = require("./config/db");


const PORT = process.env.PORT || 5000;

connectDB();

app.use(cors());


app.use(express.json());
app.use("/api",messageRoutes);
app.use("/api/students", studentRoutes);

app.get("/", (req, res) => {
    res.send("Server is running!");
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});