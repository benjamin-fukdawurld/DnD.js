import React from 'react';
import { ListEditor } from '../../Common.component';

import Proficiency from './Proficiency.component';

export default function ProficiencyList(props) {
    const generateItemEditor = (props) => {
        const [name, value] = props.item || ["", 2];
        return <Proficiency key={props.key}
            name={name}
            value={value}
            proficiencies={props.items.map(([key,]) => key.trim().toLowerCase())}
            readonly={!props.editable}
            add={props.add}
            onChange={(name, value) => props.onChange({ name, value })}
            onRemove={props.onRemove}
        />;
    }

    return <ListEditor
        LabelProps={{
            primary: "Proficiencies"
        }}
        items={props.proficiencies}
        editable={props.editable}
        onChange={(items) => {
            props.onChange(items)
        }}
        generateItemEditor={generateItemEditor}
    />;
}
