import React, { Component, createRef } from 'react';

import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';

import InputField from '../../utils/InputField.component';
import EditableItem from '../../utils/EditableItem.component';

export default class ProficiencySlotFilterEditor extends Component {
    constructor(props) {
        super(props);
        this.reset = this.reset.bind(this);
        this.filterRef = createRef(null);
    }

    reset() {
    }

    render() {
        return <EditableItem
            readonly={this.props.readonly}
            editable={this.props.editable}
        >
            <ListItemText primary={this.props.value} />
            <InputField
                onChange={() => {
                    this.props.onChange(this.filterRef.current.value,
                        this.filterRef.current.value);
                }}
                onCancel={() => {
                    this.filterRef.current.value = this.props.value
                    if (this.props.onCancel)
                        this.props.onCancel();
                }}
            >
                <TextField
                    inputRef={this.filterRef}
                    label="Filter"
                    defaultValue={this.props.value}
                />
            </InputField>
        </EditableItem >
    }
}
