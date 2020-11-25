import React, { Component } from 'react';
import { EditModeStatus } from '../../common/Core';
import PropTypes from 'prop-types';

import ButtonBase from '@material-ui/core/ButtonBase';
import { styles } from '../Theme';
import { withStyles } from '@material-ui/core/styles';

class EditableItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editable: this.props.editable
        }
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

    render() {
        const children = React.Children.toArray(this.props.children)
        if (children.length !== 2) {
            throw RangeError("EditableItem must contain exactly 2 children"
                + " the display component as first child and the editor component as second child");
        }
        return this.editMode === EditModeStatus.Editing
            ? React.cloneElement(children[1], {
                onChange: (...args) => {
                    if (children[1].props.onChange)
                        children[1].props.onChange(...args);
                    this.isEditable = false;
                },
                onCancel: () => {
                    if (children[1].props.onCancel)
                        children[1].props.onCancel();
                    this.isEditable = false;
                }
            })
            : <ButtonBase
                disableRipple={this.isReadOnly}
                component="div"
                className={[
                    this.props.classes.editable_item,
                    (this.props.readonly
                        ? this.props.classes.editable_item_readonly
                        : undefined)
                ].join(' ')}
                onClick={this.toggleEditable}>
                {children[0]}
            </ButtonBase>;
    }
}

EditableItem.propTypes = {
    readonly: PropTypes.bool.isRequired,
    editable: PropTypes.bool
};

EditableItem.defaultProps = {
    editable: false
}

export default withStyles(styles)(EditableItem);
