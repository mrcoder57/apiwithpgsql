const express=require('express')
const pool=require('./db.js')
const path = require('path');

// import express from 'express'
// import bodyParser from 'body-parser'
// import pool from './db.js';


const app=express();
const PORT=5000;
app.use(express.json())
app.use(express.static(path.join(path.resolve(),"public")))
app.set("view engine","ejs")
app.use(express.urlencoded({extended:true}))
//Routes
//get all Todos
app.get('/todos',async(req,res)=>{
  try {
    const newtodo= await pool.query("SELECT * FROM todo ")
    res.json(newtodo.rows)
  } catch (error) {
    console.error(error.message)
  }
})
//post all todos

app.post('/todos',async(req,res)=>{
    try {
        const {description}=req.body
        const newtodo= await pool.query("INSERT INTO todo (description) VALUES($1) RETURNING *",[description])
        
        
        console.log(newtodo)
       
    } catch (err) {
        console.error(err.message)
    }
})

// app.use('/users',usersRoutes)



    app.get('/', (req, res) => {
        res.render('index');
    });
 


app.listen(PORT,()=>{
    console.log(`server Running on http://localhost:${PORT}`)
})
