import React, { Component } from 'react';

import {
    splitProficiencySlots, joinProficiencySlots
} from '../../../common/ProficiencyUtils';

import { ListEditor } from '../../utils/ListEditor.component';
import { ListItemEditor } from '../../utils/ListItemEditor.component';
import { NestedListItem } from '../../utils/ListUtils.component';

import ProficiencySlotPointEditor from './ProficiencySlotPointEditor.component';
import ProficiencySlotFilterEditor from './ProficiencySlotFilterEditor.component';

export default class ProficiencySlot extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slot: this.props.slot,
            points: this.props.points,
            changed: false
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
        console.log(slotFilters);
        return <ListEditor
            editable={this.props.editable}
            items={slotFilters}
            labelComponent={ProficiencySlotPointEditor}
            LabelProps={{
                readonly: !this.props.editable,
                editable: this.props.editable,
                changed: this.state.changed,
                slot: this.slot,
                points: this.points,
                slots: this.slots,
                onValid: (slot, points) => {
                    this.setState({ points, changed: true });
                },
                onCancel: this.reset,
                onSave: () => {
                    this.setState({ changed: false },
                        () => this.props.onChange(this.state.slot, this.state.points)
                    );
                }
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
                            slot: filters,
                            changed: true
                        })
                    }}
                    onRemove={(name) => {
                        let filters = joinProficiencySlots(
                            slotFilters.filter((key) => key !== name)
                        );
                        this.setState({
                            slot: filters,
                            changed: true
                        })
                    }}
                />
            }}
        />;
    }
}
