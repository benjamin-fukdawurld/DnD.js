const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

const racesRouter = require('./routes/Race');
const classesRouter = require('./routes/Class');

app.use(cors());
app.use(express.json())

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});
const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB database connection established successfully");
});

app.use("/races", racesRouter);
app.use("/classes", classesRouter);

app.get("/", (req, res, next) => {
    res.json({ message: "test" });
    next();
});

module.exports = app;
