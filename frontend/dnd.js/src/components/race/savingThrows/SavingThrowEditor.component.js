import React from 'react';

import { nameValidator, toTitleCase } from '../../../common/Core';

import { FieldEditor, ComboBox } from '../../Common.component';

export default function SavingThrowEditor(props) {
    let obj = Object.assign({}, props, {
        label: "Saving Throw Name",
        nameValidator: (value) => {
            return nameValidator(props.savingThrows, value, props.initialName);
        },
        component: ComboBox,
        EditorProps: {
            label: "Value",
            values: ["advantage", "disadvantage"],
            valueFormatter: toTitleCase
        }
    });

    return <FieldEditor {...obj} />;
}
