import React, { Component } from 'react';
import { ListItem as MuiListItem, ListItemText as MuiListItemText } from '@material-ui/core';

import ListItemIcon from '@material-ui/core/ListItemIcon';
import Checkbox from '@material-ui/core/Checkbox';

import PropTypes from 'prop-types';

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
        const itemProps = Object.fromEntries(Object.entries(this.props)
            .filter(([key,]) => key !== "TextProps"));
        return <MuiListItem {...itemProps}>
            <ListItemIcon>
                <Checkbox
                    edge="start"
                    checked={this.isChecked}
                    onClick={() => this.isChecked = !this.isChecked}
                />
            </ListItemIcon>
            <MuiListItemText {...this.props.TextProps} />
        </MuiListItem>;
    }
}

CheckBoxListItem.propTypes = {
    checked: PropTypes.bool,
    TextProps: PropTypes.object.isRequired
};

CheckBoxListItem.defaultProps = {
    checked: false
}
