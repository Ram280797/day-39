const express = require("express");
const app = express();
const os = require("os");
const fs = require("fs");

app .use(express.json());



app.get("/filecreate", (req, res) => {
  var date = new Date().valueOf();
  console.log(date);

  fs.mkdir(`./${date}`, function () {
    console.log(`Current Timestamp ${date} Folder Created`);
  });
  res.json({ message: `Current Timestamp ${date}.txt Folder Created` });
});
// for (let index =0; index <10; index++)
fs.mkdir(`./my_folder_`,function (){
    console.log("Folder Created")

})
// for (let index =0; index <10; index++){
//     fs.rmdir(`./my_folder_${index}`,function (){
//         console.log("Deleted")
// })
// }
app.listen(3000);