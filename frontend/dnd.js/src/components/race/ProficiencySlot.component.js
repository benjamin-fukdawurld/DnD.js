import React, { Component } from 'react';
import { CollapsibleListItem, NestedList, NestedListItem } from '../Common.component';

import ListItemText from '@material-ui/core/ListItemText';

export default class ProficiencySlot extends Component {
    get slot() { return this.props.slot; }
    get points() { return this.props.points; }
    render() {
        return <CollapsibleListItem primary={`${this.points} points`}>
            <NestedList component="div">
                {
                    this.slot.split('|').map((subkey) =>
                        (<NestedListItem key={subkey}>
                            <ListItemText primary={subkey} />
                        </NestedListItem>)
                    )
                }
            </NestedList>
        </CollapsibleListItem>;
    }
}
