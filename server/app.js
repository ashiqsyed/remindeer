require('dotenv').config();

//used to read from files
const file = require("fs");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 1234;
const remindeers = require("./routes/api/remindeers");
const users = require("./routes/api/users");

app.use(cors({origin: true, credentials: true}));
app.use("/api/remindeers", remindeers)
app.use('/api/users', users);

//read mongodb connection string from a textfile in that is in the gitignore
// const db_connection_str = 'mongodb+srv://danieljhan4:Password@cluster0.5k9ddz4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const db_connection_str = file.readFileSync("./important-strings/mongo-connection.txt", "utf8"); 

mongoose.set("strictQuery", false);
mongoose.connect(db_connection_str).then(() => {
    app.listen(port, () => console.log(`Server running on port ${port}`))
    console.log("MongoDB connection established");
}).catch((err) => console.log(`Error in connectiong to the database ${err}`))

