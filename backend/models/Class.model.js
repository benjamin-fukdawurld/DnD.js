const mongoose = require('mongoose');
require('mongoose-function')(mongoose);

const Schema = mongoose.Schema

classSchema = new Schema({
    name: { type: String, required: true, unique: true, trim: true, minlength: 3 },
    hitDiceSize: { type: Number, min: 6 },
    proficiencies: {
        type: Map, of: { type: Number, min: 0 }
    },
    savingThrows: [{ type: String, minlength: 3, trim: true }],
    skills: [{ type: String, minlength: 3, trim: true }],
    skillSlots: {
        type: Map, of: { type: Number, min: 0 }
    },
    equipment: [{ type: String, minlength: 3, trim: true }]
}, {
    timestamps: true
})

const Classes = mongoose.model('Classes', classSchema);

module.exports = Classes;
