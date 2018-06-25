var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ObraSchema = new Schema({
    
    nombre: { type: String, required: true },
    ubicacion: { type: String, required: true },
    telefono: { type: Number },
    cliente:{ type: Schema.Types.ObjectId, ref: 'Cliente'},
    personasObra: [{ type: Schema.Types.ObjectId, ref: 'PersonaForanea' }],
    gruas:[{ type: Schema.Types.ObjectId, ref: 'Grua' }]

});

module.exports = mongoose.model('Obra', ObraSchema);