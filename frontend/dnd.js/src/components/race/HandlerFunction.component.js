import React, { Component } from 'react';
import { CollapsibleListItem, NestedListItem } from '../Common.component';
import AceEditor from 'react-ace';
import 'brace/mode/javascript';
import 'brace/theme/monokai';

var beautify = require('js-beautify').js;

export default class HandlerFunction extends Component {
    get handler() { return this.props.handler; }
    render() {
        let code = beautify(this.handler, {
            indent_size: 4, space_in_empty_paren: true
        });
        return <CollapsibleListItem LabelProps={{
            primary: this.props.event
        }}>
            <NestedListItem>
                <AceEditor
                    mode="javascript"
                    theme="monokai"
                    value={code}
                    readOnly={!this.props.editable}
                    wrapEnabled
                    height="1px"
                    maxLines={15}
                />
            </NestedListItem>
        </CollapsibleListItem>
    }
}
