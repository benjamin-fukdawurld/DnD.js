import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid'
import PropTypes from 'prop-types';

import { NameField, ValidOrCancel } from '../Common.component';


export class FieldEditor extends Component {
    constructor(props) {
        super(props);
        this.nameRef = React.createRef();
        this.state = {
            name: props.name,
            value: props.value || props.defaultValue
        };

        this.setName = this.setName.bind(this);
        this.setValue = this.setValue.bind(this);
        this.reset = this.reset.bind(this);
    }

    reset() {
        this.setState({
            name: this.props.name,
            value: this.props.value
        });
        this.nameRef.current.reset();
        if (this.props.onCancel)
            this.props.onCancel();
    }

    setName(name) {
        this.setState({
            name: name
        });
    }

    setValue(value) {
        this.setState({
            value: value
        });
    }

    render() {
        const EditorComponent = this.props.component;
        return <Grid container spacing={0}>
            <Grid item xs={6}>
                <NameField required
                    ref={this.nameRef}
                    label={this.props.label}
                    value={this.state.name}
                    nameValidator={this.props.nameValidator}
                    onChange={this.setName}
                />
            </Grid>
            <Grid item xs={3}>
                <EditorComponent
                    {...this.props.EditorProps}
                    value={this.state.value}
                    onChange={(event) => {
                        this.setValue(event.target.value)
                    }}
                />
            </Grid>
            <Grid item xs={3}>
                <ValidOrCancel
                    onValid={() => {
                        this.props.onChange(this.state.name, this.state.value);
                    }}
                    onCancel={this.reset}
                />
            </Grid>
        </Grid>;
    }
}

FieldEditor.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.any,
    defaultValue: PropTypes.any,
    onCancel: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    nameValidator: PropTypes.func,
    component: PropTypes.elementType.isRequired,
    InputProps: PropTypes.object
};

FieldEditor.defaultProps = {
    name: "",
    label: "Field Name",
    nameValidator: (name) => name
}
