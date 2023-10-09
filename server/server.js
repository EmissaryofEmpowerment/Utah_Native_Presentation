const express = require("express");  //includes the "express" module so we can use it inside this file.  Module documentation https://www.w3schools.com/nodejs/nodejs_modules.asp
const cors = require("cors");  //includes the "cors" module so we can use it inside this file.  Module documentation https://www.w3schools.com/nodejs/nodejs_modules.asp
require("dotenv").config();  //makes it so that we require and configure the package so that we can use the .env file

// const ExternalRoutes = require("./routes/routes.js");  //include our "routes.js" module so we can use it inside this file.  Module documentation https://www.w3schools.com/nodejs/nodejs_modules.asp

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({
    origin: true,
    credentials: true
}));

// add the middlewares
app.use(express.json({
    extended: false
}));

app.get("/", (req, res) =>  //this is the root url for the server
    res.send("Hello there!! Cheers !! The server is up and running")
);

// using our routes we defined inside our "routes.js" file
// app.use("/api", ExternalRoutes);  //adds our custom http responses from the file specified for "ExternalRoutes"

// listen
app.listen(PORT, () =>
    console.log(`Server is running on http://localhost:${PORT}`)
);