import React, { Component } from 'react';

import { CollapsibleListItem, NestedList, NestedListItem, EditableNumber }
    from '../Common.component';

export default class Abilities extends Component {
    constructor(props) {
        super(props);
        this.onAbilityChanged = this.onAbilityChanged.bind(this);
    }

    get abilities() { return this.props.abilities; }

    onAbilityChanged(ability, value) {
        this.abilities[ability] = value;
    }

    getAbilityComponent(abilityName, settings = {}) {
        return <EditableNumber
            editable={this.props.editable}
            label={settings.label || abilityName}
            value={this.abilities[abilityName]}
            onChange={(value) => {
                let abilities = this.abilities;
                abilities[abilityName] = value;
                this.props.onChange(abilities);
            }}
            min={settings.min || 1}
            max={settings.max || 20}
            step={settings.step || 1}
        />;
    }

    render() {
        return <CollapsibleListItem LabelProps={{
            primary: "Abilities"
        }}
        >
            <NestedList component="div">
                {
                    <React.Fragment>
                        <NestedListItem>
                            {this.getAbilityComponent("strength", { label: "Strength" })}
                        </NestedListItem>
                        <NestedListItem>
                            {this.getAbilityComponent("dexterity", { label: "Dexterity" })}
                        </NestedListItem>
                        <NestedListItem>
                            {this.getAbilityComponent("constitution", { label: "Constitution" })}
                        </NestedListItem>
                        <NestedListItem>
                            {this.getAbilityComponent("intelligence", { label: "Intelligence" })}
                        </NestedListItem>
                        <NestedListItem>
                            {this.getAbilityComponent("wisdom", { label: "Wisdom" })}
                        </NestedListItem>
                        <NestedListItem>
                            {this.getAbilityComponent("charisma", { label: "Charisma" })}
                        </NestedListItem>
                    </React.Fragment>
                }
            </NestedList>
        </CollapsibleListItem>
    }
}
