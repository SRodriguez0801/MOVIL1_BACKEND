const express = require('express')
const CalzadoRouter = require('./router/CalzadoRouter')
const Calzado = require('./Modelos/Calzado');

const app= express();

app.use(express.json())

var port = 5000;

app.use('/tbl_Calzado',CalzadoRouter)

app.listen(port,()=>{
    console.log('Ejecutando en puerto',port)
})