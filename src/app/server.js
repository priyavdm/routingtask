const express=require('express');
var mysql=require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'Password123',
    database : 'routetask'
  });

var cors =require('cors') 
   
app=express()
app.use(express.json())
app.use(cors())
connection.connect();

//*****************get parent data******************
app.get('/getparent',(req,res)=>{
    connection.query('select * from task',function(error,results){
        if(error){
            console.log(error);
        }
        console.log('The solution is:', results);
        res.json(results);
    })
})

//**********************get parentdetails based on id********************
app.get('/parentdet/:id',(req,res)=>{
    connection.query('select * from task where id=?',[req.params.id],function(error,results){
        if(error){
            console.log(error);
        }
        console.log('The solution is:', results);
        res.json(results);
    })
})

//**********************get child data*********************
app.get('/getchild',(req,res)=>{
    connection.query('select * from ctask',function(error,results){
        if(error){
            console.log(error);
        }
        console.log('The solution is:', results);
        res.json(results);
    })
})

//****************************get childdetails based on id****************
app.get('/childdet/:id',(req,res)=>{
    connection.query('select * from ctask where id=?',[req.params.id],function(error,results){
        if(error){
            console.log(error);
        }
        console.log('The solution is:', results);
        res.json(results);
    })
})

app.listen(3000,()=>{
    console.log('listening on port 3000');
})


