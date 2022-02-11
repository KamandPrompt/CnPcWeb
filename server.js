require("dotenv").config({ path: "./config.env" });
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");
const recruiters = require("./routes/api/recruiters");
const students = require("./routes/api/students");
const admins = require("./routes/api/admins");

const app = express();

// Bodyparser middleware
app.use(
    bodyParser.urlencoded({
      extended: false
    })
  );

app.use(bodyParser.json());

const dbURL =  "mongodb://localhost:27017/mern-auth";

//connect to MongoDB
mongoose
    .connect(process.env.MONGODB_URI || dbURL,
    { useUnifiedTopology:true, useNewUrlParser: true }
    )
    .then(() => console.log("MongoDB successfully connected", process.env.MONGODB_URI || dbURL ))
    .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/recruiters", recruiters);
app.use("/api/students", students);
app.use("/api/admins", admins);

if(process.env.NODE_ENV === 'production') {
   
  app.use(express.static(path.join(__dirname, "client", "build")))

  app.get('*',(req, res) => {
      res.sendFile(path.join(__dirname,'client','build','index.html'));
  });
}



const port = process.env.PORT || 5000;

app.listen(port,()=>console.log(`Server up and running on port ${port}`));