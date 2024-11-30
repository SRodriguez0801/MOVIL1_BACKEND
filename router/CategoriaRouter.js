const express = require('express')
const  CategoriaController= require('../Controller/CategoriaController')

const router = express.Router();

router.get('/', CategoriaController.getCategoria)
router.post('/', CategoriaController.postCategoria)
router.put('/:id_producto', CategoriaController.putCategoria)



module.exports=router;