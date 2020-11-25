import React from 'react';
import { ListItemEditor } from '../../Common.component';

import ProficiencyEditor from './ProficiencyEditor.component';


export default function Proficiency(props) {
    return <ListItemEditor {...props}
        editorComponent={ProficiencyEditor}
        EditorProps={{
            editable: props.editable,
            proficiencies: props.proficiencies,
            name: props.name,
            initialName: props.name
        }}
    />;
}
