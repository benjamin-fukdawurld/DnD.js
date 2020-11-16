import React, { Component } from 'react';
import { CollapsibleListItem, NestedList } from '../Common.component';

import Resistance from './resistances/Resistance.component';

export default class Resistances extends Component {
    constructor(props) {
        super(props);
        this.onResistanceChange = this.onResistanceChange.bind(this);
        this.onRemoveResistance = this.onRemoveResistance.bind(this);
        this.onAddResistance = this.onAddResistance.bind(this);

        this.addResistanceRef = React.createRef(null);
    }

    get resistances() { return this.props.resistances; }

    onResistanceChange(name, value, oldName) {
        if (!oldName || oldName === name) {
            let resistances = this.resistances;
            resistances[name] = value;
            this.props.onChange(resistances);
            return;
        }

        oldName = oldName.trim().toLowerCase()
        this.props.onChange(Object.fromEntries(
            Object.entries(this.resistances)
                .map(([key, oldvalue]) => {
                    let tmp = key.trim().toLowerCase();
                    if (tmp !== oldName)
                        return [key, oldvalue];

                    return [name, value];
                })
        ));
    }

    onRemoveResistance(name) {
        this.props.onChange(Object.fromEntries(
            Object.entries(this.resistances)
                .filter(([key,]) => {
                    return key !== name;
                })
        ));
    }

    onAddResistance(name, value) {
        let resistances = { ...this.resistances };
        resistances[name] = value;
        this.props.onChange(resistances);
        this.addResistanceRef.current.reset()
    }

    render() {
        let res = Object.keys(this.props.resistances).map(r => r.trim().toLowerCase());
        return <CollapsibleListItem primary="Resistances">
            <NestedList component="div">
                {Object.entries(this.props.resistances).map(([key, value]) =>
                    <Resistance key={key}
                        readonly={!this.props.editable}
                        resistances={res}
                        name={key}
                        value={value}
                        onChange={(name, value) => {
                            this.onResistanceChange(name, value, key)
                        }}
                        onRemove={this.onRemoveResistance}
                    />
                )}
                {this.props.editable &&
                    <Resistance
                        add
                        resistances={res}
                        name={""}
                        value={0.5}
                        onChange={this.onAddResistance}
                        onRemove={this.onRemoveResistance}
                        ref={this.addResistanceRef}
                    />
                }
            </NestedList>
        </CollapsibleListItem>;
    }
}
