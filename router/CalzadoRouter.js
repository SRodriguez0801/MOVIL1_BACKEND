const express = require('express')
const  CalzadoController= require('../Controller/CalzadoController')

const router = express.Router();

router.get('/', CalzadoController.getCalzado)
router.post('/', CalzadoController.postCalzado)
router.put('/:id_calzado', CalzadoController.putCalzado)
router.delete('/:id_calzado',estudianteController.deleteCalzado)


module.exports=router;