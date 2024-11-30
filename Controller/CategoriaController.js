const Categoria = require('../Modelos/Categoria');


//request, response
exports.getCategoria = async (req,resp) =>{

    try {

        //select *from estudiante
        const tbl_categoria = await Categoria.findAll();

        resp.status(200).send(tbl_categoria)
        
    } catch (error) {
        resp.status(500).send(error)
        console.log(error)
    }

}

//agregar
exports.postCategoria = async (req,resp) =>{

    try {
    
        const result =await Categoria.create(req.body);
        resp.json(result)
    
      } catch (error) {
        resp.status(500).json({error: 'Ocurrio un error' + error})
      }

}

exports.putCategoria = async (req,resp) =>{
    try {
    
        const result =await Categoria.findByPk(req.params.id_categoria);
    
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