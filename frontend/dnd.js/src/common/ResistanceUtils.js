export const resistanceValues = [
    -1.0,
    0.5,
    1.0
];

export function resistanceFormatter(value) {
    if (value === -1.0)
        return "Vulnerability";

    if (value === 0.5)
        return "Resistance";

    if (value === 1.0)
        return "Immunity";

    return `${Math.floor(value * 100)}%`;
}
