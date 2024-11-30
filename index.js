const express = require('express')
const ProductoRoter = require('./router/ProductoRoter')
const CategoriaRouter = require('./router/CategoriaRouter')
const Producto = require('./Modelos/Producto');
const Categoria = require('./Modelos/Categoria');

const app= express();

app.use(express.json())

var port = 5000;

app.use('/tbl_producto',ProductoRoter)
app.use('/tbl_categoria',CategoriaRouter)

app.listen(port,()=>{
    console.log('Ejecutando en puerto',port)
})