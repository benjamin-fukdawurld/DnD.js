import React, { Component } from 'react';
import { ListItem, ListItemText } from '@material-ui/core';
import PropTypes from 'prop-types';

import { CollapsibleListItem, NestedList } from '../Common.component';


function updateObjectItems(item, oldItem, items) {
    const { name, value } = item;
    let [oldName,] = oldItem;
    if (!oldName || oldName === name) {
        items[name] = value;
        return items;
    }

    oldName = oldName.trim().toLowerCase()
    return Object.fromEntries(
        Object.entries(items)
            .map(([key, oldvalue]) => {
                let tmp = key.trim().toLowerCase();
                if (tmp !== oldName)
                    return [key, oldvalue];

                return [name, value];
            }));
}

function updateArrayItems(item, oldItem, items) {
    return items.map((current) => {
        if (current === oldItem) {
            return item;
        }

        return current;
    });
}

export class ListEditor extends Component {
    constructor(props) {
        super(props);
        this.onItemChange = this.onItemChange.bind(this);
        this.onRemoveItem = this.onRemoveItem.bind(this);
        this.onAddItem = this.onAddItem.bind(this);
    }

    get items() { return this.props.items; }

    onItemChange(item, oldItem) {
        this.props.onChange(Array.isArray(this.items)
            ? updateArrayItems(item, oldItem, this.items)
            : updateObjectItems(item, oldItem, this.items));
    }

    onRemoveItem(item) {
        if (Array.isArray(this.items)) {
            this.props.onChange(this.items.filter((current) => current !== item))
            return;
        }

        this.props.onChange(Object.fromEntries(
            Object.entries(this.items)
                .filter(([key,]) => {
                    return key !== item;
                })
        ));
    }

    onAddItem(item) {
        if (Array.isArray(this.items)) {
            this.props.onChange([...this.items, item]);
            return;
        }

        const { name, value } = item;
        let items = { ...this.items };
        items[name] = value;
        this.props.onChange(items);
    }

    itemArray() {
        if (Array.isArray(this.props.items))
            return this.props.items;

        return Object.entries(this.props.items);
    }

    render() {
        let items = this.itemArray();
        return <CollapsibleListItem
            listItemComponent={this.props.listItemComponent}
            labelComponent={this.props.labelComponent}
            LabelProps={this.props.LabelProps}
        >
            <NestedList component="div">
                {items.map((item) => {
                    let key = JSON.stringify(item);
                    return this.props.generateItemEditor({
                        key,
                        item,
                        items,
                        editable: this.props.editable,
                        onChange: (item) => {
                            this.onItemChange(item, JSON.parse(key))
                        },
                        onRemove: this.onRemoveItem
                    })
                })}
                {this.props.editable &&
                    this.props.generateItemEditor({
                        add: true,
                        editable: true,
                        items,
                        onChange: this.onAddItem,
                        onRemove: this.onRemoveItem,
                    })
                }
            </NestedList>
        </CollapsibleListItem>;
    }
}

ListEditor.propTypes = {
    generateItemEditor: PropTypes.func.isRequired,
    listItemComponent: PropTypes.elementType,
    labelComponent: PropTypes.elementType,
    LabelProps: PropTypes.object,
    items: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.object
    ]),
    editable: PropTypes.bool
};

ListEditor.defaultProps = {
    listItemComponent: ListItem,
    labelComponent: ListItemText
};
