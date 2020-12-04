import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MuiTextField from '@material-ui/core/TextField';

export default class TextField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value || this.props.defaultValue,
            error: false,
            helperText: ""
        }

        this.onChange = this.onChange.bind(this);
    }

    get value() {
        return this.state.value;
    }

    set value(value) {
        this.setState({ value });
    }

    reset() {
        this.setState({
            value: this.props.value,
            error: false,
            helperText: ""
        })
    }

    onChange(event) {
        if (this.props.valueValidator) {
            this.setState({
                value: event.target.value,
                ...this.props.valueValidator(event.target.value)
            },
                () => {
                    if (this.props.onErrorStateChange)
                        this.props.onErrorStateChange(this.state.error);

                    if (!this.state.error) {
                        if (this.props.onChange)
                            this.props.onChange(this.state.value);
                    }
                });
        } else {
            console.log(event.target.value);
            this.setState({ value: event.target.value }, () => {
                if (this.props.onChange)
                    this.props.onChange(this.state.value);
            })
        }
    }

    render() {
        const alteredProps = Object.assign(
            Object.fromEntries(
                Object.entries(this.props)
                    .filter(([key,]) => !(['valueValidator'].includes(key)
                    ))),
            {
                value: this.state.value,
                error: this.state.error,
                helperText: this.state.helperText,
                onChange: this.onChange
            });

        return <MuiTextField
            {...alteredProps}
        />;
    }
}

TextField.propTypes = {
    autoComplete: PropTypes.string,
    autoFocus: PropTypes.bool,
    classes: PropTypes.object,
    color: PropTypes.oneOf(['primary', 'secondary']),
    defaultValue: PropTypes.any,
    disabled: PropTypes.bool,
    error: PropTypes.bool,
    FormHelperTextProps: PropTypes.object,
    fullWidth: PropTypes.bool,
    helperText: PropTypes.string,
    id: PropTypes.string,
    InputLabelProps: PropTypes.object,
    inputProps: PropTypes.object,
    InputProps: PropTypes.object,
    label: PropTypes.node,
    margin: PropTypes.oneOf(['dense', 'none', 'normal']),
    multiline: PropTypes.bool,
    name: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    rows: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    rowsMax: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    select: PropTypes.bool,
    SelectProps: PropTypes.object,
    size: PropTypes.oneOf(['medium', 'small']),
    type: PropTypes.string,
    value: PropTypes.any,
    variant: PropTypes.oneOf(['filled', 'outlined', 'standard']),
    valueValidator: PropTypes.func,
    onErrorStateChange: PropTypes.func
}

TextField.defaultProps = {
    autoFocus: false,
    color: 'primary',
    disabled: false,
    error: false,
    fullWidth: false,
    multiline: false,
    required: false,
    select: false,
    variant: 'standard'
}
