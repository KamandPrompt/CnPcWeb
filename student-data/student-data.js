const csvtojson = require("csvtojson");
const fs = require("fs");
const generator = require('generate-password');
const bcrypt = require("bcryptjs");

const filepath = "./students.csv";

csvtojson().fromFile(filepath).then((data)=>{
    data.map((item)=>{
        var password = generator.generate({
            length: 12,
            numbers: true
        });
        console.log(password);
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        console.log(hash);
        return item.password = hash;
    });

    fs.writeFileSync("output.js",JSON.stringify(data),"utf-8");
}).catch((err)=>{
    console.log(err);
});

