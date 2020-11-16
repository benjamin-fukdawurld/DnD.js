export default class Abilities {
    #strength;
    #dexterity;
    #constitution;
    #intelligence;
    #wisdom;
    #charisma;
    constructor(props) {
        this.#strength = 0;
        this.#dexterity = 0;
        this.#constitution = 0;
        this.#intelligence = 0;
        this.#wisdom = 0;
        this.#charisma = 0;

        this.assign(props);
    }

    assign(obj) {
        if (!obj)
            return;

        this.#strength = obj.strength || this.#strength;
        this.#dexterity = obj.dexterity || this.#dexterity;
        this.#constitution = obj.constitution || this.#constitution;
        this.#intelligence = obj.intelligence || this.#intelligence;
        this.#wisdom = obj.wisdom || this.#wisdom;
        this.#charisma = obj.charisma || this.#charisma;
    }

    fromJSON(obj) { this.assign(obj); }
    toJSON() {
        let { strength, dexterity, constitution, intelligence, wisdom, charisma } = this
        return { strength, dexterity, constitution, intelligence, wisdom, charisma };
    }

    get strength() { return this.#strength; }
    set strength(value) { this.#strength = value; }
    get dexterity() { return this.#dexterity; }
    set dexterity(value) { this.#dexterity = value; }
    get constitution() { return this.#constitution; }
    set constitution(value) { this.#constitution = value; }
    get intelligence() { return this.#intelligence; }
    set intelligence(value) { this.#intelligence = value; }
    get wisdom() { return this.#wisdom; }
    set wisdom(value) { this.#wisdom = value; }
    get charisma() { return this.#charisma; }
    set charisma(value) { this.#charisma = value; }
}
