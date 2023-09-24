// import * as fsPromises from 'fs/promises'
// import * as path from 'path'

const fs = require('fs')
const fsPromise = require('fs').promises
const path = require('path')

// /node-hello-world/files
let basepath = path.join(__dirname, "files")

let rfile = path.join(basepath, "appinfo.txt")
let wfile = path.join(basepath, "response.txt")
let afile = path.join(basepath, "appendresponse.txt")

async function fileHandling() {
    try {
        let fileData = await fsPromise.readFile(rfile, 'utf8')
        await fsPromise.writeFile(wfile, fileData)
        await fsPromise.appendFile(wfile, "\nWelcome to Studytonight")
    }
    catch(err) {
        console.log(err)
    }
}

fileHandling()

// fs.readFile(rfile, 'utf8', (err, data) => {
//     if(err) {
//         throw err;
//     }

//     fs.writeFile(wfile, data , (err) => {
//         if(err) {
//             throw err;
//         }
//         console.log("Write file complete...")

//         fs.appendFile(wfile, "Welcome back  to Studytonight App" , (err) => {
//             if(err) {
//                 throw err;
//             }
//             console.log("Append file complete...")
//         })
//     })
    
// })

console.log("I am free from File handling...")