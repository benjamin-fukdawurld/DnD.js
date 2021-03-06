const mongoose = require('mongoose');
require('mongoose-function')(mongoose);

const Schema = mongoose.Schema

raceSchema = new Schema({
    name: { type: String, required: true, unique: true, trim: true, minlength: 3 },
    alignments: [{ type: String, enum: ['LG', 'LN', 'LE', 'NG', 'N', 'NE', 'CG', 'CN', 'CE'] }],
    speed: { type: Number, min: 1, default: 9 },
    nightVision: { type: Number, min: 1, default: 1 },
    skills: [{ type: String, minlength: 2 }],
    resistances: {
        type: Map, of: { type: Number, min: -1, max: 1, default: 0.5 }
    },
    savingThrows: {
        type: Map, of: { type: String, minlength: 3 }
    },
    longRestDuration: { type: Number, min: 1, default: 8 },
    proficiencies: {
        type: Map, of: { type: Number, min: 0 }
    },
    proficiencySlots: {
        type: Map, of: { type: Number, min: 0 }
    },
    handlers: {
        type: Map, of: {
            type: String,
            match: /function\([a-zA-Z_][a-zA-Z\d_]*(?:,\s*[a-zA-Z_][a-zA-Z\d_]*)*\)\s*\{[\s\S]*\}/
        }
    },
    abilities: {
        strength: { type: Number },
        dexterity: { type: Number },
        constitution: { type: Number },
        intelligence: { type: Number },
        wisdom: { type: Number },
        charisma: { type: Number }
    },
    abilitySlots: { type: Number }
}, {
    timestamps: true
})

const Races = mongoose.model('Races', raceSchema);

module.exports = Races;
