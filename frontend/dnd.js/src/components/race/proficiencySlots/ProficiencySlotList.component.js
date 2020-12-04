import React, { Component, createRef } from 'react';
import { ListEditor, NestedList } from '../../Common.component';
import ProficiencySlot from './ProficiencySlot.component';

export default class ProficiencySlotList extends Component {
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
        this.reset = this.reset.bind(this);
        this.refArray = [];
    }

    get slots() { return this.props.slots; }

    reset() {
        for (let r of this.refArray) {
            if (r.current)
                r.current.reset();
        }
    }

    onChange(slot, points, oldSlot) {
        if (!oldSlot || oldSlot === slot) {
            let slots = this.slots;
            slots[slot] = points;
            this.props.onChange(slots);
            return;
        }

        oldSlot = oldSlot.trim().toLowerCase()
        this.props.onChange(Object.fromEntries(
            Object.entries(this.slots)
                .map(([key, oldpoints]) => {
                    let tmp = key.trim().toLowerCase();
                    if (tmp !== oldSlot)
                        return [key, oldpoints];

                    return [slot, points];
                })
        ));

    }

    render() {
        this.refArray = [];
        const generateItemEditor = (props) => {
            this.refArray.push(createRef(null));
            const [slot, points] = props.item || ["*", 2];
            return <NestedList component="div">
                <ProficiencySlot key={props.key || (this.refArray.length - 1)}
                    ref={this.refArray[this.refArray.length - 1]}
                    editable={this.props.editable}
                    slot={slot}
                    points={points}
                    onChange={(newSlot, points) => {
                        this.onChange(newSlot, points, slot)
                    }}
                />
            </NestedList>;
        }

        return <ListEditor
            LabelProps={{
                primary: "Proficiency Slots"
            }}
            items={this.slots}
            editable={this.props.editable}
            onChange={([slot, points]) => {
                this.onChange(slot, points)
            }}
            generateItemEditor={generateItemEditor}
        />;
    }
}
