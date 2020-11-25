import React from 'react';
import { ListEditor } from '../../Common.component';

import SavingThrow from './SavingThrow.component';

export default function SavingThrowList(props) {
    const generateItemEditor = (props) => {
        const [name, value] = props.item || ["", "advantage"];
        return <SavingThrow key={props.key}
            name={name}
            value={value}
            savingThrows={props.items.map(([key,]) => key.trim().toLowerCase())}
            readonly={!props.editable}
            add={props.add}
            onChange={(name, value) => props.onChange({ name, value })}
            onRemove={props.onRemove}
        />;
    }

    return <ListEditor
        LabelProps={{
            primary: "Saving Throws"
        }}
        items={props.savingThrows}
        editable={props.editable}
        onChange={props.onChange}
        generateItemEditor={generateItemEditor}
    />;
}
