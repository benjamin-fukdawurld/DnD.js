import React, { Component } from 'react';
import { ListItem as MuiListItem, ListItemText as MuiListItemText } from '@material-ui/core';

import ListItemIcon from '@material-ui/core/ListItemIcon';
import Checkbox from '@material-ui/core/Checkbox';

export class CheckBoxListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: props.checked || false
        };
    }

    get isChecked() { return this.state.checked; }
    set isChecked(checked) { this.setState({ checked: checked }) }

    render() {
        return <MuiListItem {...this.props}>
            <ListItemIcon>
                <Checkbox
                    edge="start"
                    checked={this.isChecked}
                    onClick={() => this.isChecked = !this.isChecked}
                />
            </ListItemIcon>
            <MuiListItemText {...this.props.text_props} />
        </MuiListItem>;
    }
}
