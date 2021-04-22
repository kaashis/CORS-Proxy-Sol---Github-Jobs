//packages
const express = require("express");

// internal code
const { getJobs } = require("./Services");
const server = express();

let PORT =3000;

// if(process.env.PORT===undefined){
//     PORT = process.env.PORT;
// }

const PORT = process.env.PORT ? process.env.PORT:3000;


server.listen(PORT,()=>{
    console.log(`Server listening on ${PORT}`);
});

//const jobs = getJobs("Python").then((pythonJobs) => console.log(pythonJobs[0]));

// const jobs =[
//     {title:"Director of Ops", salary: "100000", company: "Amazon"},
//     {title:"SDE", salary:"130000", company:"Audible"}
// ];

//GET /jobs --end point
server.get("/jobs", (req, res)=>{
   // console.log("success")
   // var {tech} = {req.query};
   //if (tech===undefined)
   if ("tech" in req.query){
     //console.log("yes");
     console.log(`Sending ${req.query.tech} jobs`);
     getJobs(req.query.tech).then((tech_Jobs) => res.send(tech_Jobs[0]));
   }
   else{
     res.sendStatus(404);
     //return res.status(400).send({error:"tech query parameter is required"});
     //res.status(404).send('Not found');
   }
    
})

server.get("/", (req, res) => {
  console.log("home");
});

// const axios = require("axios")
// const URL = "https://jobs.github.com/positions.json?description=python";

// axios.get(URL).then((res)=>console.log(res.data));
//axios.get(URL).then((res)=>console.log(Object.keys(res)));
//npm init -y && touch index.js && npm i axios



// const pythonJobs=  getJobs("Python");
// const pythonJobs=  getJobs("Java");

// console.log(pythonJobs[0]);
// console.log(javaJobs[0]);

// getJobs("Python").then((pythonJobs) => console.log(pythonJobs[0]));
// getJobs("Java").then((javaJobs) => console.log(javaJobs[0]));

// getJobs("Python").then((pythonJobs)=>console.log(pythonJobs[0]));
// getJobs("Java").then((javaJobs) => console.log(javaJobs[0]));