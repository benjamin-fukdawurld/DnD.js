import React, { Component } from 'react';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/RemoveCircle';
import AddIcon from '@material-ui/icons/AddCircle';
import { NestedListItem } from '../Common.component';

import PropTypes from 'prop-types';

const EditModeStatus = {
    NotEditable: -1,
    NotEditing: 0,
    Editing: 1
};

export class ListItemEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editable: this.props.editable
        }
        this.initialName = props.name;
        this.toggleEditable = this.toggleEditable.bind(this);
    }

    get isReadOnly() {
        return this.props.readonly;
    }

    get isEditable() {
        return this.state.editable;
    }

    set isEditable(value) {
        this.setState({
            editable: value
        });
    }

    toggleEditable() {
        if (this.isReadonly)
            return;

        this.setState({
            editable: !this.isEditable
        });
    }

    get editMode() {
        if (this.isReadOnly)
            return EditModeStatus.NotEditable;

        if (!this.isEditable)
            return EditModeStatus.NotEditing;

        return EditModeStatus.Editing;
    }

    get LabelItem() {
        return <ListItemText primary={this.props.name}
            secondary={this.props.add
                ? this.props.addLabel
                : this.props.valueFormatter(this.props.value)}
            onClick={this.toggleEditable}
        />
    }

    get LabelActionButton() {
        return < ListItemSecondaryAction >
            {this.props.add
                ? <IconButton onClick={this.toggleEditable}>
                    <AddIcon color="secondary" />
                </IconButton>
                : <IconButton onClick={() => this.props.onRemove(this.props.name)}>
                    <RemoveIcon color="secondary" />
                </IconButton>
            }
        </ListItemSecondaryAction>
    }

    render() {
        const ItemComponent = this.props.component
        return <ItemComponent
            button={this.editMode === EditModeStatus.NotEditing}
        >
            {this.editMode !== EditModeStatus.Editing
                ? <React.Fragment>
                    {this.LabelItem}
                    {!this.props.readonly && this.LabelActionButton}
                </React.Fragment>
                : React.cloneElement(React.Children.only(this.props.children), {
                    ...this.props.EditorProps,
                    value: this.props.value,
                    onChange: (name, value) => {
                        this.props.onChange(name, value, this.initialName)
                        this.isEditable = false;
                    },
                    onCancel: () => {
                        this.isEditable = false;
                    }
                })
            }
        </ItemComponent>
    }
}

ListItemEditor.propTypes = {
    component: PropTypes.elementType,
    nameFormatter: PropTypes.func,
    valueFormatter: PropTypes.func,
    readonly: PropTypes.bool,
    editable: PropTypes.bool,
    add: PropTypes.bool,
    addLAbel: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.node,
    onChange: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
};

ListItemEditor.defaultProps = {
    component: NestedListItem,
    nameFormatter: (name) => name,
    valueFormatter: (value) => value,
    readonly: false,
    editable: false,
    add: false,
    addLabel: 'Add'
}
