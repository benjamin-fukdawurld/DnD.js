import React, { Component } from 'react';
import { CollapsibleListItem, NestedListItem } from '../Common.component';
import Typography from '@material-ui/core/Typography';

var beautify = require('js-beautify').js;

export default class HandlerFunction extends Component {
    get handler() { return this.props.handler; }
    render() {
        return <CollapsibleListItem primary={this.props.event}>
            <NestedListItem>
                <Typography component="pre">
                    {beautify(this.handler, {
                        indent_size: 4, space_in_empty_paren: true
                    })}
                </Typography>
            </NestedListItem>
        </CollapsibleListItem>
    }
}
