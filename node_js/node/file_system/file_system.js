// create new copy file in file system +++++++++++++++++++++++++++++++++++
// let fs = require("fs");

// const fs = require("fs");

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
//    if (err)
//        console.log(err);
//    else
//        console.log('File renamed');
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
// cont = "decode your skill";
// fs.writeFileSync("f1.txt",cont,"utf8");



// read file +++++++++++++++++++++++++++++++++++++++++++++++
// let fs = require("fs");
// fs.readFile("f1.txt","utf8",(err,data) => {
//     if(err)
//         console.log(err);
//     else
//         console.log(data);
// })

// read file sync ++++++++++++++++++++++++++++++++++++++++
// let fs = require("fs");
// data = fs.readFileSync("f1.txt","utf8");
// console.log(data);

// .open ++++++++++++++++++++++++++++++++++++++++
// old version function 
// var fs = require('fs');
// fs.open('open_file.txt', 'w', (err, file) => {
//    if (err)
//        console.log(err);
//    else
//        console.log('File opened');
// });

// .appendFile +++++++++++++++++++++++++++++++++++++++++++++++++++++++++===
// var fs = require('fs');
// fs.appendFile('mynewfile1.txt', "aryan is good", function (err) {
//    if (err)
//        console.log(err);
//    else
//        console.log('File created and write');
// });


// .unlink(delet file ) ++++++++++++++++++++++++++++++++++++++++++++++++++++++
// var fs = require('fs');
// fs.unlink('f1.txt', () => {
//     console.log('File deleted!');
// });