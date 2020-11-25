import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

import InputField from './InputField.component';
import { styles } from '../Theme';

export default function NumberField(props) {
    const classes = makeStyles(styles)();
    const numRef = React.createRef(null)

    return <InputField
        onChange={() =>
            props.onChange(parseFloat(numRef.current.value))
        }
        onCancel={() => {
            numRef.current.value = props.value
            if (props.onCancel)
                props.onCancel();
        }}
    >
        <TextField
            type="number"
            className={classes.race_field}
            label={props.label}
            defaultValue={props.value}
            inputProps={{
                ref: numRef,
                min: props.min,
                max: props.max,
                step: props.step,
                onClick: (event) => event.stopPropagation(),
            }}
        />
    </InputField>
}

NumberField.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
    onCancel: PropTypes.func,
    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.number
};

NumberField.defaultProps = {
    min: 0,
    max: 100,
    step: 1
}
