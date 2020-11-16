import React from 'react';

import SavingThrowValueSelect from './SavingThrowValueSelect.component'

import { nameValidator } from '../../../common/Core';

import { FieldEditor } from '../../Common.component';

export default function SavingThrowEditor(props) {
    return <FieldEditor
        label="Saving Throw Name"
        nameValidator={(value) => {
            return nameValidator(props.savingThrows, value, props.initialName)
        }}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        onCancel={props.onCancel}
        InputProps={{
            label: "Value",
        }}
    >
        <SavingThrowValueSelect />
    </FieldEditor>;
}
