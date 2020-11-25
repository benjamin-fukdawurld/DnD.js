import React from 'react';
import { ListEditor } from '../../Common.component';

import Resistance from './Resistance.component';

export default function ResistanceList(props) {
    const generateItemEditor = (props) => {
        const [name, value] = props.item || ["", 0.5];
        return <Resistance key={props.key}
            name={name}
            value={value}
            resistances={props.items.map(([key,]) => key.trim().toLowerCase())}
            readonly={!props.editable}
            add={props.add}
            onChange={(name, value) => {
                props.onChange({ name, value })
            }}
            onRemove={props.onRemove}
        />;
    }

    return <ListEditor
        LabelProps={{
            primary: "Resistances"
        }}
        items={props.resistances}
        editable={props.editable}
        onChange={props.onChange}
        generateItemEditor={generateItemEditor}
    />;
}
