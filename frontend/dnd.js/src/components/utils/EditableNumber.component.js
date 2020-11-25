import React from 'react';

import ListItemText from '@material-ui/core/ListItemText';
import PropTypes from 'prop-types';

import EditableItem from './EditableItem.component';

import NumberField from './NumberField.component';

export function EditableNumber(props) {
    const LabelComponent = props.labelComponent;
    return <EditableItem readonly={!props.editable}>
        <LabelComponent {...props.labelPropsAdapter(props)} />
        <NumberField
            label={props.label}
            value={props.value}
            min={props.min}
            max={props.max}
            step={props.step}
            onChange={props.onChange}
        />
    </EditableItem>;
}

EditableNumber.propTypes = {
    editable: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
    labelComponent: PropTypes.elementType,
    labelPropsAdapter: PropTypes.func,
    labelProps: PropTypes.object,
    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.number
};

EditableNumber.defaultProps = {
    labelComponent: ListItemText,
    labelPropsAdapter: (props) => {
        return Object.assign({
            primary: props.label,
            secondary: props.value,
            className: props.className,
        }, props.labelProps);
    },
    labelProps: {},
    min: 0,
    max: 100,
    step: 1,
    editable: false
}
