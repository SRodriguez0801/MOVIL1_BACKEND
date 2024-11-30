const Producto = require('../Modelos/Producto');


//request, response
exports.getProducto = async (req,resp) =>{

    try {

        //select *from estudiante
        const tbl_producto = await Producto.findAll();

        resp.status(200).send(tbl_producto)
        
    } catch (error) {
        resp.status(500).send(error)
        console.log(error)
    }

}

//agregar
exports.postProducto = async (req,resp) =>{

    try {
    
        const result =await Producto.create(req.body);
        resp.json(result)
    
      } catch (error) {
        resp.status(500).json({error: 'Ocurrio un error' + error})
      }

}

exports.putProducto = async (req,resp) =>{
    try {
    
        const result =await Producto.findByPk(req.params.id_producto);
    
        if(result){
          await result.update(req.body);
          resp.status(200).send("actualizado correctamente")
        }
        else{
          resp.status(402).send("No se encontraron registro")
        }
       
       
      } catch (error) {
        resp.status(500).json({error: 'Ocurrio un error' + error})
      }
}


// exports.deleteCalzado = async (req,resp) =>{

//     try {
    
//         const result =await Calzado.findByPk(req.params.id_calzado);
    
//         if(result){
//           await result.destroy();
//           resp.status(200).send("Elimado correctamente")
//         }
//         else{
//           resp.status(402).send("No se encontraron registro")
//         }
       
    
//       } catch (error) {
//         resp.status(500).json({error: 'Ocurrio un error' + error})
//       }

// }