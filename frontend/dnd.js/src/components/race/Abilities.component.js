import React, { Component } from 'react';

import { CollapsibleListItem, NestedList, NestedListItem } from '../Common.component';

import ListItemText from '@material-ui/core/ListItemText';

export default class Abilities extends Component {
    constructor(props) {
        super(props);
        this.onAbilityChanged = this.onAbilityChanged.bind(this);
    }

    get abilities() { return this.props.abilities; }

    onAbilityChanged(ability, value) {
        this.abilities[ability] = value;
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
                            <ListItemText primary="Strength" secondary={this.abilities["strength"]} />
                        </NestedListItem>
                        <NestedListItem>
                            <ListItemText primary="Dexterity" secondary={this.abilities["dexterity"]} />
                        </NestedListItem>
                        <NestedListItem>
                            <ListItemText primary="Constitution" secondary={this.abilities["constitution"]} />
                        </NestedListItem>
                        <NestedListItem>
                            <ListItemText primary="Intelligence" secondary={this.abilities["intelligence"]} />
                        </NestedListItem>
                        <NestedListItem>
                            <ListItemText primary="Wisdom" secondary={this.abilities["wisdom"]} />
                        </NestedListItem>
                        <NestedListItem>
                            <ListItemText primary="Charisma" secondary={this.abilities["charisma"]} />
                        </NestedListItem>
                    </React.Fragment>
                }
            </NestedList>
        </CollapsibleListItem>
    }
}
