import React, { Component } from 'react';
import { CollapsibleListItem, NestedList, NestedListItem } from '../Common.component';

import { EditableNumber } from '../Common.component';

export default class Proficiencies extends Component {
    constructor(props) {
        super(props)
        this.onChange = this.onChange.bind(this);
    }

    get proficiencies() { return this.props.proficiencies; }

    onChange(key, value) {
        let proficiencies = this.proficiencies;
        proficiencies[key] = value;
        this.props.onChange(proficiencies)
    }

    render() {
        return <CollapsibleListItem primary="Proficiencies">
            <NestedList component="div">
                {Object.entries(this.proficiencies).map(([key, value]) =>
                    <NestedListItem key={key}>
                        <EditableNumber
                            editable={this.props.editable}
                            className={this.props.className}
                            label={key}
                            value={value}
                            onChange={(event) => this.onChange(key, event.target.value)}
                            min={0}
                            max={5}
                            step={1}
                        />
                    </NestedListItem>
                )}
            </NestedList>
        </CollapsibleListItem>;
    }
}
