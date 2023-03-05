// const fs = require("fs");
// // Create && Delete Folder
// if(!fs.existsSync("./assets")) {
//     fs.mkdir("./assets", (err) => {
//         if(err) {
//             console.log(err);
//         }
//         console.log("Folder Created!")
//     })
// } else {
//     fs.rmdir("./assets", (err) => {
//         if(err) {
//             console.log(err);
//         }
//         console.log("Folder Deleted!")
//     })
// }

// // Create & Delete file
// if(fs.existsSync("txt.txt")) {
//     fs.unlink("txt.txt", (err) => {
//         if(err) {
//             console.log(err);
//         }
//         console.log("File Deleted!")
//     })
// }