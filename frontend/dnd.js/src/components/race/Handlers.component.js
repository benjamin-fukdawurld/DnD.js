import React, { Component } from 'react';
import { CollapsibleListItem, NestedList } from '../Common.component';
import HandlerFunction from './HandlerFunction.component';

export default class Handlers extends Component {
    get primary() { return "Handlers"; }
    get handlers() { return this.props.handlers; }
    render() {
        return <CollapsibleListItem LabelProps={{
            primary: "Handlers"
        }}>
            {Object.entries(this.handlers).map(([key, value]) =>
                <NestedList key={key}>
                    <HandlerFunction event={key} handler={value} />
                </NestedList>)}
        </CollapsibleListItem>;
    }
}
