const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config({ path: "./config.env" });

const app = express();

connectDB();

app.use(express.json({ extended: false, limit: "50mb" }));
app.use(cors());

app.use("/api/login", require("./routes/login"));
app.use("/api/child", require("./routes/child"));
app.use("/api/report", require("./routes/report"));
app.use("/api/transaction", require("./routes/transaction"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running at ${PORT}`));
