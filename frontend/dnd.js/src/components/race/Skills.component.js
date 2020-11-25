import React, { Component } from 'react';
import { CollapsibleListItem, NestedList, NestedListItem } from '../Common.component';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/AddCircleOutline';
import RemoveIcon from '@material-ui/icons/RemoveCircle';
import TextField from '@material-ui/core/TextField';

export default class Skills extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nameFieldState: {
                value: "",
                error: false,
                helperText: ""
            }
        }

        this.onNameChange = this.onNameChange.bind(this);
    }

    onNameChange(event) {
        let name = event.target.value || "";
        let state = this.state.nameFieldState;
        state.value = name;
        name = name.trim().toLowerCase();
        if (!name || name.length < 3) {
            state.error = true;
            state.helperText = "Name must contain at least 3 characters";
        }
        else if (this.props.skills.includes(name)) {
            state.error = true;
            state.helperText = "Name is already in use";
        }
        else {
            state.error = false;
            state.helperText = "";
        }

        this.setState({
            nameFieldState: state
        });
    }

    resetNameField() {
        this.setState({
            nameFieldState: {
                value: "",
                error: false,
                helperText: ""
            }
        });
    }

    get primary() { return "Skills"; }
    get skills() { return this.props.skills; }
    render() {
        return <CollapsibleListItem LabelProps={{
            primary: "Skills"
        }}>
            <NestedList component="div">
                {this.skills.map((skill) =>
                    <NestedListItem key={skill}>
                        <ListItemText primary={skill} />
                        {this.props.editable &&
                            <ListItemSecondaryAction>
                                <IconButton
                                    onClick={
                                        () => {
                                            if (this.props.onChange) {
                                                this.props.onChange(
                                                    this.props.skills
                                                        .filter(item => item !== skill)
                                                );
                                            }

                                            this.resetNameField();
                                        }
                                    }>
                                    <RemoveIcon color="secondary" />
                                </IconButton>
                            </ListItemSecondaryAction>
                        }
                    </NestedListItem>
                )}
                {this.props.editable
                    && <NestedListItem>
                        <TextField
                            required
                            label="Skill Name"
                            {...this.state.nameFieldState}
                            onChange={this.onNameChange}
                        />
                        <ListItemSecondaryAction>
                            <IconButton
                                disabled={(!this.state.nameFieldState.value
                                    || this.state.nameFieldState.error)}
                                onClick={
                                    () => {
                                        if (this.props.onChange) {
                                            this.props.onChange([
                                                ...this.props.skills,
                                                this.state.nameFieldState.value]);
                                        }

                                        this.resetNameField();
                                    }
                                }>
                                <AddIcon
                                    color={(!this.state.nameFieldState.value
                                        || this.state.nameFieldState.error)
                                        ? "disabled"
                                        : "secondary"} />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </NestedListItem>
                }
            </NestedList>
        </CollapsibleListItem>;
    }
}
