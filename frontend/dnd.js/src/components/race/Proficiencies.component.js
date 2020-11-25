import React, { Component } from 'react';
import { CollapsibleListItem, NestedList, NestedListItem } from '../Common.component';

import Proficiency from './proficiencies/Proficiency.component';

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
        return <CollapsibleListItem LabelProps={{
            primary: "Proficiencies"
        }}>
            <NestedList component="div">
                {Object.entries(this.proficiencies).map(([key, value]) =>
                    <NestedListItem key={key}>
                        <Proficiency
                            editable={this.props.editable}
                            EditorProps={{
                                InputProps: {
                                    className: this.props.className
                                }
                            }}
                            label={key}
                            value={value}
                            onChange={(event) => this.onChange(key, event.target.value)}
                        />
                    </NestedListItem>
                )}
            </NestedList>
        </CollapsibleListItem>;
    }
}
