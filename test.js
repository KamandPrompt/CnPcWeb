const fs = require("fs");
const mongoose = require("mongoose");
const Student = require("./models/StudentSchema");
const jsonPath = "./student-data/output.js";

const jsonData = fs.readFileSync(jsonPath,
            {encoding:'utf8', flag:'r'});
const orgData = JSON.parse(jsonData);

// orgData.forEach(ele => {
//     student.findOne({rollNo:ele.rollNo}).then(user=>{
//         if(user){
//             return res.status(400).json({rollNo:"Email already exists"});
//         } else{
//             const newEntry = new student({
//                 name: ele.name,
//                 rollNo: ele.rollNo,
//                 degree: ele.degree,
//                 branch: ele.branch,
//                 cgpa: ele.cgpa,
//                 email: ele.email,
//                 contactNumber: ele.contactNo,
//                 dob: ele.dob,
//                 tenthPercentage: ele.tenth,
//                 twelthPercentage: ele.twelth,
//                 advanceRank: ele.JEEAdvanceRank,
//                 resume: ele.Resume,
//                 password: ele.password
//             });
//             newEntry.save()
//             .then(user => res.json(user))
//             .catch(err => console.log(err));
//         }
//     }).catch((err)=>{
//         console.log(err);
//     });
// });


const createDatabase = async (orgData) => {
    
    try{
        const inserted = await Student.insertMany(orgData);
        if(inserted){
            console.log("data inserted");
        }else{
            console.log("data not inserted");
        }
    } catch(e){
        console.log(e);
    }
}


 
module.exports = {
    fun: createDatabase,
    param: orgData
}