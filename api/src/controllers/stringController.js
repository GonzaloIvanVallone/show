const { Cadena } = require('../db.js');

const createNewString = async (req, res) => {
    try{
        const { content } = req.body
        const addcadena = {content: content}
        const created = await Cadena.create(addcadena)
        res.status(200).json(created);
    }catch(e){
        console.log(e)
    }
}
const getAll = async (_req, res) => {
    try{
        const cadenas = await Cadena.findAll();
        if(cadenas.length){
            let cadenas2 = cadenas.map(e=> e.content)
            res.status(200).json(cadenas2);
        }else{
            res.status(400).json([]);
        }
    }catch(e){
        console.log(e)
    }
}
const storeString = async () => {
    try{
        const cadena = {content:"Cadena ejemplo"}
        await Cadena.create(cadena)
    }catch(e){
        console.log(e)
    }
}

module.exports = { createNewString, getAll, storeString }