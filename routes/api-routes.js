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
      const nombreNegocio = req.body.nombreNegocio;
      const telefono = req.body.telefono;
      const direccion = req.body.direccion;
      const primeraLlamada = req.body.primeraLlamada;
      const segundaLlamada = req.body.segundaLlamada;
      const recordatorios = req.body.recordatorios;
      const nuevoProspecto = new Prospecto({
        nombreNegocio,
        telefono,
        direccion,
        primeraLlamada,
        segundaLlamada,
        recordatorios,
        clasficacion,
      });
      await nuevoProspecto.save();
      res.json({ status: `Agregado` });
    } catch (err) {
      console.log(err);
    }
});

//update
router.put('/:id', async (req, res) => {  
    const {
      nombreNegocio,
      telefono,
      direccion,
      primeraLlamada,
      segundaLlamada,
      recordatorios,
      clasficacion,
    } = req.body;
    await Prospecto.findByIdAndUpdate(req.params.id, {
        nombreNegocio,
        telefono,
        direccion,
        primeraLlamada,
        segundaLlamada,
        recordatorios,
        clasficacion,
      });
    res.json({status: "datos actualizados"});
});

//delete
router.delete('/:id', async (req, res) => { 
    await Prospecto.findByIdAndRemove(req.params.id);
    res.json({status: `prospecto ${req.params.id} borrado`});
})

module.exports = router;