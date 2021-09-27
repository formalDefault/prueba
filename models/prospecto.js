const mongoose = require('mongoose');
require('mongoose-long')(mongoose);
var SchemaTypes = mongoose.Schema.Types;
const {Schema} = mongoose;

const prospectoSchema = new Schema({
    nombreNegocio: {type: String, require: true, default: ''},
    telefono: {type: SchemaTypes.Long, require: true, default: ''},
    direccion: {type: String, require: true, default: ''},
    primeraLlamada: {type: Date, require: true, default: Date.now},
    segundaLlamada: {type: Date, default: null},
    recordatorios: {type: String, default: ''}, 

})
 
module.exports = mongoose.model('Prospecto', prospectoSchema);