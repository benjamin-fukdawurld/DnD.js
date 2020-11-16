import React from 'react';

import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';

export function EditableNumber(props) {
    if (!props.editable)
        return <ListItemText primary={props.label} secondary={props.value}
            className={props.className} />;

    return <TextField
        type="number"
        className={props.className}
        label={props.label}
        value={props.value}
        onChange={props.onChange}
        inputProps={{ min: props.min, max: props.max, step: props.step }}
    />
}
