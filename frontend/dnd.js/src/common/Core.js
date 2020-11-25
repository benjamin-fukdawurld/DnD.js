export function nameValidator(nameList, name, initialName) {
    let value = name;
    let error = false;
    let helperText = "";
    initialName = initialName.trim().toLowerCase()
    name = name.trim().toLowerCase();
    if (!name || name.length < 3) {
        error = true;
        helperText = "Name must contain at least 3 characters";
    }
    else if (nameList.includes(name) && (!initialName || name !== initialName)) {
        error = true;
        helperText = "Name is already in use";
    }

    return { value, error, helperText };
}

export function toTitleCase(str) {
    return str.toLowerCase().split(' ').map(function (word) {
        return word.replace(word[0], word[0].toUpperCase());
    }).join(' ');
}

export const EditModeStatus = {
    NotEditable: -1,
    NotEditing: 0,
    Editing: 1
};
