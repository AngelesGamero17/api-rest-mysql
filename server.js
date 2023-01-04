const express = require('express');
const mysql = require('mysql');
const morgan = require('morgan');
const myconnection = require('express-myconnection');
const routes = require('./routes')

const app = express()

app.set('port', process.env.PORT || 9000);


//middlewares..............
app.use(morgan('start'));
app.use(express.json());
app.use(myconnection(mysql,{

host:'localhost',
port:3306,
user:'root',
password:'',
database:'empleados'
},'single'));
//routes .................
app.get('/',(req,res)=>{
    res.send('welcome lo my api')
})

app.use('/api',routes)
//server running ..................
app.listen(app.get('port'),()=> {
    console.log('server running onn port' ,app.get('port'))
}) 