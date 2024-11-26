const Calzado= require('../Modelos/Calzado');


//request, response
exports.getCalzado = async (req,resp) =>{

    try {

        //select *from estudiante
        const tbl_Calzado = await Calzado.findAll();

        resp.status(200).send(tbl_Calzado)
        
    } catch (error) {
        resp.status(500).send(error)
    }

}

//agregar
exports.postCalzado = async (req,resp) =>{

    try {
    
        const result =await Calzado.create(req.body);
        resp.json(result)
    
      } catch (error) {
        resp.status(500).json({error: 'Ocurrio un error' + error})
      }

}

exports.putCalzado = async (req,resp) =>{
    try {
    
        const result =await Calzado.findByPk(req.params.id_calzado);
    
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


exports.deleteCalzado = async (req,resp) =>{

    try {
    
        const result =await Calzado.findByPk(req.params.id_calzado);
    
        if(result){
          await result.destroy();
          resp.status(200).send("Elimado correctamente")
        }
        else{
          resp.status(402).send("No se encontraron registro")
        }
       
    
      } catch (error) {
        resp.status(500).json({error: 'Ocurrio un error' + error})
      }

}