const express = require("express");
const cors = require("cors");
const app = express();

const PORT = 5000;

app.use(cors());

const messageRoutes = require("./routes/messageRoutes");

app.use(express.json());
app.use("/api",messageRoutes);

app.get("/", (req, res) => {
    res.send("Server is running!");
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});