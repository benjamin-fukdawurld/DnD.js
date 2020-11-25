import React, { Component } from 'react';
import { CollapsibleListItem, NestedList, NestedListItem, CheckBoxListItem } from '../Common.component';

import ListItemText from '@material-ui/core/ListItemText';

export const alignmentStrings = {
    'LG': 'Loyal Good',
    'LN': 'Loyal Neutral',
    'LE': 'Loyal Evil',
    'NG': 'Neutral Good',
    'N': 'Neutral',
    'NE': 'Neutral Evil',
    'CG': 'Chaotic Good',
    'CN': 'Chaotic Neutral',
    'CE': 'Chaotic Evil'
};

export default class Alignments extends Component {
    get alignments() { return this.props.alignments; }
    get isEditable() { return !!this.props.editable; }
    onChecked(field, checked) {
        if (!this.props.onChange)
            return;

        let arr = this.alignments
        if (checked)
            arr.push(field);
        else
            arr = arr.filter(item => item !== field);

        this.props.onChange(arr);
    }

    render() {
        return <CollapsibleListItem LabelProps={{
            primary: "Alignments"
        }}>
            <NestedList component="div">
                {!this.isEditable ?
                    this.alignments.map((alignment) =>
                        (<NestedListItem key={alignment}>
                            <ListItemText primary={alignmentStrings[alignment]} />
                        </NestedListItem>))
                    : Object.entries(alignmentStrings).map(([key, value]) =>
                        (<CheckBoxListItem key={key}
                            role={undefined}
                            dense
                            checked={this.alignments.includes(key)}
                            onChange={(event) => {
                                this.onChecked(key, event.target.checked)
                            }}
                            TextProps={
                                {
                                    primary: value
                                }}>
                        </CheckBoxListItem>)
                    )
                }
            </NestedList>
        </CollapsibleListItem>
    }
}
