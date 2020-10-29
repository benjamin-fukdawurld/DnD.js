import Abilities from './Abilities';

export default class Race {
    #_id;
    #name;
    #alignment;
    #speed;
    #nightVision;
    #skills;
    #resistances;
    #longRestDuration;
    #spells;
    #spellSlots;
    #longSleepDuration;
    #proficiencies;
    #proficiencySlots;
    #handlers;
    #abilities;
    #abilitySlots;
    constructor(props) {
        this.#_id = null;
        this.#name = "";
        this.#alignment = [];
        this.#speed = 0;
        this.#nightVision = 0;
        this.#skills = [];
        this.#resistances = {};
        this.#longRestDuration = 0;
        this.#spells = {};
        this.#spellSlots = 0;
        this.#proficiencies = {};
        this.#proficiencySlots = 0;
        this.#handlers = {};
        this.#abilitySlots = 0;
        this.#abilities = new Abilities();

        this.assign(props);
    }

    assign(props) {
        if (!props)
            return;

        this.#_id = props._id || this.#_id;
        this.#name = props.name || this.#name;
        this.#alignment = props.alignment || this.#alignment;
        this.#speed = props.speed || this.#speed;
        this.#nightVision = props.nightVision || this.#nightVision;
        this.#skills = props.skills || this.#skills;
        this.#resistances = props.resistances || this.#resistances;
        this.#longRestDuration = props.longRestDuration || this.#longRestDuration;
        this.#spells = props.spells || this.#spells;
        this.#spellSlots = props.spellSlots || this.#spellSlots;
        this.#longSleepDuration = props.longSleepDuration || this.#longSleepDuration;
        this.#proficiencies = props.proficiencies || this.#proficiencies;
        this.#proficiencySlots = props.proficiencySlots || this.#proficiencySlots;
        this.#handlers = props.handlers || this.#handlers;
        this.#abilitySlots = props.abilitySlots || this.#abilitySlots;
        this.#abilities.assign(props.abilities);
    }

    get name() { return this.#name; }
    set name(value) { this.#name = value; }
    get alignment() { return this.#alignment; }
    set alignment(value) { this.#alignment = value; }
    get speed() { return this.#speed; }
    set speed(value) { this.#speed = value; }
    get nightVision() { return this.#nightVision; }
    set nightVision(value) { this.#nightVision = value; }
    get skills() { return this.#skills; }
    set skills(value) { this.#skills = value; }
    get resistances() { return this.#resistances; }
    set resistances(value) { this.#resistances = value; }
    get longRestDuration() { return this.#longRestDuration; }
    set longRestDuration(value) { this.#longRestDuration = value; }
    get spells() { return this.#spells; }
    set spells(value) { this.#spells = value; }
    get spellSlots() { return this.#spellSlots; }
    set spellSlots(value) { this.#spellSlots = value; }
    get longSleepDuration() { return this.#longSleepDuration; }
    set longSleepDuration(value) { this.#longSleepDuration = value; }
    get proficiencies() { return this.#proficiencies; }
    set proficiencies(value) { this.#proficiencies = value; }
    get proficiencySlots() { return this.#proficiencySlots; }
    set proficiencySlots(value) { this.#proficiencySlots = value; }
    get handlers() { return this.#handlers; }
    set handlers(value) { this.#handlers = value; }
    get abilities() { return this.#abilities; }
    set abilities(value) { this.#abilities = value; }
    get abilitySlots() { return this.#abilitySlots; }
    set abilitySlots(value) { this.#abilitySlots = value; }
}
