import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ListItem, ListItemText, ListItemSecondaryAction } from '@material-ui/core';
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
        const ListItemComponent = this.props.listItemComponent;
        const LabelComponent = this.props.labelComponent;
        return <React.Fragment>
            <ListItemComponent button onClick={() => this.isOpen = !this.isOpen}>
                <LabelComponent open={this.isOpen} {...this.props.LabelProps} />
                <ListItemSecondaryAction>
                    {this.props.children
                        && (this.isOpen
                            ? <ExpandLess />
                            : <ExpandMore />)}
                </ListItemSecondaryAction>
            </ListItemComponent>
            <Collapse in={this.isOpen} timeout="auto" unmountOnExit>
                {this.props.children}
            </Collapse>
        </React.Fragment>;
    }
}

CollapsibleListItem.propTypes = {
    listItemComponent: PropTypes.elementType,
    labelComponent: PropTypes.elementType,
    LabelProps: PropTypes.object
};

CollapsibleListItem.defaultProps = {
    listItemComponent: ListItem,
    labelComponent: ListItemText
};
