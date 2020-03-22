const axios = require("axios");
const fs =require("fs")
const generate = require("./generateMarkdown")
const api = {
  getUser(data) {
    return axios.get(`https://api.github.com/users/${data.username}`)
      .then(function(user){
        const readme =generate(data,user)
        fs.writeFile("readme.md", readme,function(err){
          if(err){
            return console.log(err)
          }
          else{
            console.log("File sucessfully written")
          }
        })
      })
  }
};

module.exports = api;
