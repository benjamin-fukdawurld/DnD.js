import React from 'react';

import { nameValidator } from '../../../common/Core';

import { FieldEditor, ComboBox } from '../../Common.component';

import { resistanceValues, resistanceFormatter } from '../../../common/ResistanceUtils';

export default function ResistanceEditor(props) {
    let obj = Object.assign({}, props, {
        label: "Resistance Name",
        nameValidator: (value) => {
            return nameValidator(props.resistances, value, props.initialName);
        },
        component: ComboBox,
        EditorProps: {
            label: "Value",
            values: resistanceValues,
            valueFormatter: resistanceFormatter
        }
    });

    return <FieldEditor {...obj} />;;
}
