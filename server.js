require("dotenv").config({ path: "./config.env" });
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");
const { google } = require("googleapis");

const recruiters = require("./routes/api/recruiters");
const students = require("./routes/api/students");

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

if(process.env.NODE_ENV === 'production') {
   
  app.use(express.static(path.join(__dirname, "client", "build")))

  app.get('*',(req, res) => {
      res.sendFile(path.join(__dirname,'client','build','index.html'));
  });
}


app.get("/testing-data", async (req, res) => {
  const auth = new google.auth.GoogleAuth({
    keyFile: "fetching_data.json", //the key file
    //url to spreadsheets API
    scopes: "https://www.googleapis.com/auth/spreadsheets", 
  });
  const authClientObject = await auth.getClient();
  const googleSheetsInstance = google.sheets({ version: "v4", auth: authClientObject });
  const spreadsheetId = "16S8LEhYuFEOBnTgnm9TG1NGo-3h0DSIt5jPQCM7XYRI";
  try {
    const readData = await googleSheetsInstance.spreadsheets.values.get({
      auth, //auth object
      spreadsheetId, // spreadsheet id
      range: "Sheet1", //range of cells to read from.
    });
    console.log(readData.data.values)
  } catch (error) {
    console.log(error);
  }
  res.send("hi")
//   'Name',           'Roll Number',     
//   'Degree',         'Branch',
//   'CGPA',           'Email Id',        
//   'Contact Number', 'DOB',
//   'Gender',         '10th %',
//   '12th %',         'JEE Advance Rank',
//   'Resume'
// ],

});
const port = process.env.PORT || 5000;

app.listen(port,()=>console.log(`Server up and running on port ${port}`));