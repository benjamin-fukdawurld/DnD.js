import React from 'react';

import ResistanceValueSelect from './ResistanceValueSelect.component'

import { nameValidator } from '../../../common/Core';

import { FieldEditor } from '../../Common.component';

export default function ResistanceEditor(props) {
    return <FieldEditor
        label="Resistance Name"
        nameValidator={(value) => {
            return nameValidator(props.resistances, value, props.initialName)
        }}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        onCancel={props.onCancel}
    >
        <ResistanceValueSelect label="Value" />
    </FieldEditor>;
}
