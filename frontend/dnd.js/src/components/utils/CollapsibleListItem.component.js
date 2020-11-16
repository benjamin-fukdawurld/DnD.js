import React, { Component } from 'react';
import { ListItem as MuiListItem, ListItemText as MuiListItemText } from '@material-ui/core';

import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

export class CollapsibleListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: props.open || false,
        };
    }

    get isOpen() { return this.state.isOpen; }
    set isOpen(open) { this.setState({ isOpen: open }); }

    render() {
        return <React.Fragment>
            <MuiListItem button onClick={() => this.isOpen = !this.isOpen}>
                <MuiListItemText primary={this.props.primary} />
                {this.isOpen ? <ExpandLess /> : <ExpandMore />}
            </MuiListItem>
            <Collapse in={this.isOpen} timeout="auto" unmountOnExit>
                {this.props.children}
            </Collapse>
        </React.Fragment>;
    }
}
