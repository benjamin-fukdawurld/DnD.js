import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';

export class NameField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value,
            error: false,
            helperText: ""
        }

        this.onChange = (event) => {
            this.setState({ ...this.props.nameValidator(event.target.value) },
                () => {
                    if (this.props.onErrorStateChange)
                        this.props.onErrorStateChange(this.state.error);

                    if (!this.state.error) {
                        if (this.props.onChange)
                            this.props.onChange(this.state.value);
                    }
                });
        }
    }

    reset() {
        this.setState({
            value: this.props.value,
            error: false,
            helperText: ""
        })
    }

    render() {
        return <TextField
            {...this.state}
            required={this.props.required}
            label={this.props.label}
            onChange={this.onChange}
            InputProps={this.props.InputProps}
        />;
    }
}
