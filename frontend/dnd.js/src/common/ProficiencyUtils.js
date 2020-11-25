export function proficiencySlotFormatter(value) {
    if (value === "*")
        return "All";

    if (value.length > 26)
        return value.slice(0, 26) + "...";
}

export function splitProficiencySlots(slots) {
    return slots.split('|');
}

export function joinProficiencySlots(slots) {
    return slots.join('|');
}

export function proficiencyPointFormatter(nbPoints) {
    return `${nbPoints} Points`;
}
