import React, { Component } from 'react';

import {
    splitProficiencySlots, joinProficiencySlots
} from '../../common/ProficiencyUtils';

import { ListEditor } from '../utils/ListEditor.component';
import { ListItemEditor } from '../utils/ListItemEditor.component';
import { NestedListItem } from '../utils/ListUtils.component';

import ProficiencySlotPointEditor from './proficiencySlots/ProficiencySlotPointEditor.component';
import ProficiencySlotFilterEditor from './proficiencySlots/ProficiencySlotFilterEditor.component';

export default class ProficiencySlot extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slot: this.props.slot,
            points: this.props.points
        };

        this.reset = this.reset.bind(this);
    }

    get slot() { return this.state.slot; }
    get points() { return this.state.points; }

    reset() {
        this.setState({
            slot: this.props.slot,
            points: this.props.points
        });
    }

    render() {
        const slotFilters = (this.slot === "*"
            ? []
            : splitProficiencySlots(this.slot));
        return <ListEditor
            editable={this.props.editable}
            items={slotFilters}
            labelComponent={ProficiencySlotPointEditor}
            LabelProps={{
                editable: this.props.editable,
                slot: this.slot,
                points: this.points,
                slots: this.slots,
                onValid: (slot, points) => {
                    this.setState({ slot, points });
                    this.props.onChange(slot, points);
                },
                onCancel: this.reset
            }}
            onChange={(items) => this.props.onChange(joinProficiencySlots(items))}
            generateItemEditor={(props) => {
                return <ListItemEditor key={props.key}
                    add={props.add}
                    EditorProps={{
                        readonly: !this.props.editable,
                        editable: true
                    }}
                    component={NestedListItem}
                    editorComponent={ProficiencySlotFilterEditor}
                    labelPropsAdapter={(props) => {
                        if (props.add)
                            return { secondary: props.addLabel };

                        return { primary: props.valueFormatter(props.value) };
                    }}
                    name={props.item}
                    value={props.item}
                    readonly={!props.editable}
                    editable={props.add}
                    onChange={(name, useless, initialName) => {
                        let filters = joinProficiencySlots((props.add
                            ? [...slotFilters, name]
                            : slotFilters.map((key) => key === initialName ? name : key)
                        ));
                        this.setState({
                            slot: filters
                        })
                    }}
                    onRemove={(name) => {
                        let filters = joinProficiencySlots(
                            slotFilters.filter((key) => key !== name)
                        );
                        this.setState({
                            slot: filters
                        })
                    }}
                />
            }}
        />;
    }
}
