var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GruaSchema = new Schema({
    
    numeroSerie:{ type: String, required: true },
    marca:{ type: String, required: true },
    modelo:{ type: String, required: true },
    configuraciones:{
        altura: { type: Number },
        pluma: { type: Number },
        empotrado: { type: String },
        lastre: { type: Number }
    }
});

module.exports = mongoose.model('Grua', GruaSchema);