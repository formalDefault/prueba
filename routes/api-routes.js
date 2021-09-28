const express = require('express');
const router = express.Router();
const Prospecto = require('../models/prospecto'); //Schema de documento de inserto o actualizacion mongodb
 
//select * from [tabla]
router.get('/', async (req, res) => {
    const listaProspectos = await Prospecto.find() ; 
    res.json(listaProspectos);
});

//select id from [tabla]
router.get('/:id', async (req, res) => {
    const listaProspectos = await Prospecto.findById(req.params.id);
    res.json(listaProspectos);
});

//insert into 
router.post('/', async (req, res) => {
    try { 
      const { nombreNegocio, telefono, direccion } = req.body;
      const prospecto = new Prospecto({ nombreNegocio, telefono, direccion })
      await prospecto.save(); 
      res.json({ status: `Agregado` });
    } catch (err) {
      console.log(err);
    }
});

//update
router.put('/:accion/:id/:status', async (req, res) => {     
  var date = new Date; 
  switch (req.params.accion) {
    case "updateEstado":
      await Prospecto.findByIdAndUpdate(req.params.id, { estado: req.params.status, primeraLlamada: date })
        .then();
        res.json({ status: "datos actualizados" });
      break; 
  }
});

//delete 
router.delete('/:id', async (req, res) => { 
    await Prospecto.findByIdAndRemove(req.params.id); 
    res.json({status: `prospecto ${req.params.id} borrado`});
})

module.exports = router;