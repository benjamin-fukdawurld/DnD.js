import React from 'react';
import { ListItemEditor } from '../../Common.component';

import SavingThrowEditor from './SavingThrowEditor.component';


export default function SavingThrow(props) {
    return <ListItemEditor {...props}
        editorComponent={SavingThrowEditor}
        EditorProps={{
            savingThrows: props.savingThrows,
            name: props.name,
            initialName: props.name
        }}
    />;
}
