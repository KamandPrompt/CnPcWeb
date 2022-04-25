const { google } = require("googleapis");
const fs = require('fs');
const generator = require('generate-password');
const bcrypt = require("bcryptjs");
const path = require('path');

const accessSpreadsheet = async() => {
    console.log("Running test.js")
    const auth = new google.auth.GoogleAuth({
        keyFile: "fetching_data.json",
        scopes: "https://www.googleapis.com/auth/spreadsheets", 
      });
      const authClientObject = await auth.getClient();
      const googleSheetsInstance = google.sheets({ version: "v4", auth: authClientObject });
      const spreadsheetId = "1vtDWu_XI6_I2xP-ms6k5AkDjc3Epq9Yq3nhAawQnxQM";
      try {
        const readData = await googleSheetsInstance.spreadsheets.values.get({
          auth, 
          spreadsheetId, 
          range: "Sheet1", 
        });
        let arrays = readData.data.values;
        const [keys, ...values] = arrays;
        const objects = values.map(array => array.reduce((a, v, i) => ({...a, [keys[i]]: v}), {}));
        objects.map((item)=>{
          var password = generator.generate({
              length: 12,
              numbers: true
          });
          console.log(item.rollNo);
          return item.password = password;
      });
        // fs.writeFileSync('client/src/output.json',JSON.stringify(objects),"utf-8");
        return objects;
      } catch (error) {
        console.log(error);
      }
}

module.exports = accessSpreadsheet;
// accessSpreadsheet();