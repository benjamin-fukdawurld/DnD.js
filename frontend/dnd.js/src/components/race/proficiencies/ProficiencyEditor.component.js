import React from 'react';
import TextField from '@material-ui/core/TextField';

import { nameValidator } from '../../../common/Core';

import { FieldEditor } from '../../Common.component';

export default function ProficiencyEditor(props) {
    let obj = Object.assign({}, props, {
        label: "Proficiency Name",
        nameValidator: (value) => {
            return nameValidator(props.proficiencies, value, props.initialName);
        },
        component: TextField,
        EditorProps: {
            type: "number",
            label: "Value",
            inputProps: {
                min: 2,
                max: 6,
                step: props.step
            }
        }
    });

    return <FieldEditor {...obj} />;
}
