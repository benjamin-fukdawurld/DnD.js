import React, { Component } from 'react';
import { CollapsibleListItem, NestedList } from '../Common.component';

import SavingThrow from './savingThrows/SavingThrow.component';

export default class SavingThrows extends Component {
    constructor(props) {
        super(props);
        this.onSavingThrowChange = this.onSavingThrowChange.bind(this);
        this.onRemoveSavingThrow = this.onRemoveSavingThrow.bind(this);
        this.onAddSavingThrow = this.onAddSavingThrow.bind(this);
    }

    get savingThrows() { return this.props.savingThrows; }

    onSavingThrowChange(name, value, oldName) {
        if (!oldName || oldName === name) {
            let savingThrows = this.savingThrows;
            savingThrows[name] = value;
            this.props.onChange(savingThrows);
            return;
        }

        oldName = oldName.trim().toLowerCase()
        this.props.onChange(Object.fromEntries(
            Object.entries(this.savingThrows)
                .map(([key, oldvalue]) => {
                    let tmp = key.trim().toLowerCase();
                    if (tmp !== oldName)
                        return [key, oldvalue];

                    return [name, value];
                })
        ));
    }

    onRemoveSavingThrow(name) {
        this.props.onChange(Object.fromEntries(
            Object.entries(this.savingThrows)
                .filter(([key,]) => {
                    return key !== name;
                })
        ));
    }

    onAddSavingThrow(name, value) {
        let savingThrows = { ...this.savingThrows };
        savingThrows[name] = value;
        this.props.onChange(savingThrows);
    }

    render() {
        let sav = Object.keys(this.props.savingThrows).map(r => r.trim().toLowerCase());
        return <CollapsibleListItem primary="SavingThrows">
            <NestedList component="div">
                {Object.entries(this.props.savingThrows).map(([key, value]) =>
                    <SavingThrow key={key}
                        readonly={!this.props.editable}
                        savingThrows={sav}
                        name={key}
                        value={value}
                        onChange={(name, value) => {
                            this.onSavingThrowChange(name, value, key)
                        }}
                        onRemove={this.onRemoveSavingThrow}
                    />
                )}
                {this.props.editable &&
                    <SavingThrow
                        add
                        savingThrows={sav}
                        name={""}
                        value={"advantage"}
                        onChange={this.onAddSavingThrow}
                        onRemove={this.onRemoveSavingThrow}
                    />
                }
            </NestedList>
        </CollapsibleListItem>;
    }
}
