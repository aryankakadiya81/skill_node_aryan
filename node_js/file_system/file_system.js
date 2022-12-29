// create new copy file in file system +++++++++++++++++++++++++++++++++++
// let fs = require("fs");

// fs.readFile("f1.txt","utf8",(err,data) => {
//     if(err)
//         console.log("err");
//     else
//         fs.writeFile("f1_copy.txt",data,"utf8", (err) => {
//             if(err)
//                 console.log(err);
//             else
//                 console.log("new");
//         })
// })


// rename file +++++++++++++++++++++++++++++++++++++++++++++++++++++

// let fs = require("fs");
// fs.rename('file_1.txt', 'myrenamedfile.txt', (err) => {
//   if (err) throw err;
//   console.log('File Renamed!');
// });

// write file ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// let fs = require("fs");
// cont = "decode your skill"
// fs.writeFile("file_1.txt",cont,"utf8", (err) => {
//     if(err)
//         console.log(err);
//     else
//         console.log("done");
// })

// write sync file ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// let fs = require("fs");



// read file +++++++++++++++++++++++++++++++++++++++++++++++
// let fs = require("fs");

// fs.readFile("f1.txt","utf8",(err,data) => {
//     if(err)
//         console.log(err);
//     else
//         console.log(data);
// })

// read sync file ++++++++++++++++++++++++++++++++++++++++
// let fs = require("fs");
// data = fs.readFileSync("f1.txt","utf8");
// console.log(data);

// old version function ----------------------------------------
// var fs = require('fs');
// fs.open('open_file.txt', 'w', function (err, file) {
//   if (err) throw err;
//   console.log('Saved!');
// });