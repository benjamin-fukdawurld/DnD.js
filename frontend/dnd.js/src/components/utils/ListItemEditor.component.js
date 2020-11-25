import React, { Component } from 'react';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import { NestedListItem, AddButton, RemoveButton } from '../Common.component';

import PropTypes from 'prop-types';
import { EditModeStatus } from '../../common/Core';
import EditableItem from './EditableItem.component';

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
        const LabelComponent = this.props.labelComponent;
        return <LabelComponent {...Object.assign(this.props.labelPropsAdapter(
            this.props,
            {
                onClick: this.toggleEditable
            }
        ))}
        />
    }

    get LabelActionButton() {
        return < ListItemSecondaryAction >
            {this.props.add
                ? <AddButton onClick={this.toggleEditable} color="secondary" />
                : <RemoveButton
                    onClick={(event) => {
                        event.stopPropagation();
                        this.props.onRemove(this.props.name)
                    }}
                    color="secondary"
                />
            }
        </ListItemSecondaryAction>
    }

    render() {
        const ItemComponent = this.props.component
        const EditorComponent = this.props.editorComponent;
        return <ItemComponent>
            <EditableItem readonly={this.props.readonly}>
                <React.Fragment>
                    {this.LabelItem}
                    {!this.props.readonly && this.LabelActionButton}
                </React.Fragment>
                <EditorComponent
                    {...this.props.EditorProps}
                    value={this.props.value}
                    onChange={(name, value) => {
                        this.props.onChange(name, value, this.initialName)
                        this.isEditable = false;
                    }}
                    onCancel={() => {
                        this.isEditable = false;
                    }}
                />
            </EditableItem>
        </ItemComponent>
    }
}

ListItemEditor.propTypes = {
    component: PropTypes.elementType,
    labelComponent: PropTypes.elementType,
    editorComponent: PropTypes.elementType.isRequired,
    labelPropsAdapter: PropTypes.func,
    valueFormatter: PropTypes.func,
    readonly: PropTypes.bool,
    editable: PropTypes.bool,
    add: PropTypes.bool,
    addLabel: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.node,
    onChange: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
};

ListItemEditor.defaultProps = {
    component: NestedListItem,
    labelComponent: ListItemText,
    valueFormatter: (value) => value,
    labelPropsAdapter: (props) => {
        if (props.add)
            return { secondary: props.addLabel };

        return { primary: props.name, secondary: props.valueFormatter(props.value) };
    },
    readonly: false,
    editable: false,
    add: false,
    addLabel: 'Add'
}
