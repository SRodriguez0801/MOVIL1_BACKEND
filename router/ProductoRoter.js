const express = require('express')
const  ProductoController= require('../Controller/ProductoController')

const router = express.Router();

router.get('/', ProductoController.getProducto)
router.post('/', ProductoController.postProducto)
router.put('/:id_producto', ProductoController.putProducto)



module.exports=router;