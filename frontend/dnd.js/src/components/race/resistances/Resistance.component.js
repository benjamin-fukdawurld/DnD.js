import React from 'react';
import { ListItemEditor } from '../../Common.component';

import { resistanceFormatter } from '../../../common/ResistanceUtils';
import ResistanceEditor from './ResistanceEditor.component';

export default function Resistance(props) {
    return <ListItemEditor {...props}
        valueFormatter={resistanceFormatter}
        EditorProps={{
            resistances: props.resistances,
            name: props.name,
            initialName: props.name,
            value: props.value
        }}
    >
        <ResistanceEditor />
    </ListItemEditor>
}
