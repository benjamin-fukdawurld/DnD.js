import React, { Component } from 'react';
import { CollapsibleListItem, NestedList } from '../Common.component';
import ProficiencySlot from './ProficiencySlot.component';

export default class ProficiencySlotList extends Component {
    get slots() { return this.props.slots; }
    render() {
        return <CollapsibleListItem primary="Proficiency Slots">
            <NestedList component="div">
                {
                    Object.entries(this.slots).map(([key, value]) =>
                        <ProficiencySlot key={key} slot={key} points={value} />)
                }
            </NestedList>
        </CollapsibleListItem>;
    }
}
