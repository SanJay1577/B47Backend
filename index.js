const fs = require("fs");
console.log("i'm working good");

const [, , arg1, arg2] = process.argv;

function sum(num1, num2) {
  const value = parseInt(num1) + parseInt(num2);
  console.log(`The sum is ${value}`);
}

sum(arg1, arg2);

// to read a existing file
fs.readFile("./sample.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(`Error occured : ${err}`);
  } else {
    console.log(data);
  }
});
// to create a new file
const content = "Hey I'm writted by node js file system";
fs.writeFile("./newTextFile.txt", content, (err) => {
  if (err) {
    console.log(`Error occured : ${err}`);
  } else {
    console.log("File Writted succesfully");
  }
});

const appendContent = `\nHey I was edited by node js file system`;
// to edit a file
fs.appendFile("./newTextFile.txt", appendContent, (err) => {
  if (err) {
    console.log(`Error occured : ${err}`);
  } else {
    console.log("File updated succesfully");
  }
});

// delete a file.
fs.unlink("./newTextFile.txt", (err)=>{
    if (err) {
        console.log(`Error occured : ${err}`);
      } else {
        console.log("File deleted succesfully");
      }
})