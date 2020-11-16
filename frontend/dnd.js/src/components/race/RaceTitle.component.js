import React, { Component } from 'react';
import { Title } from '../Common.component';

import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/SaveAlt';
import CancelIcon from '@material-ui/icons/Cancel';

export default class RaceTitle extends Component {
    render() {
        let hasError = false;
        return <React.Fragment>
            <Grid container>
                <Grid item>
                    <Title
                        editable={this.props.editable}
                        className={this.props.className}
                        value={this.props.value}
                        initialValue={this.props.initialValue}
                        nameFieldProps={this.props.nameFieldProps}
                        onChange={this.props.onChange}
                        onErrorStateChange={(value) => { hasError = value }}
                        InputProps={this.props.InputProps}
                        races={this.props.races}
                    />
                </Grid>
                <Grid item>
                    {this.props.editable ?
                        <React.Fragment>
                            <IconButton color="secondary"
                                disabled={!this.props.isValid() && !hasError}
                                onClick={this.props.onSave}>
                                <SaveIcon />
                            </IconButton>
                            <IconButton color="secondary"
                                onClick={this.props.onCancel}>
                                <CancelIcon />
                            </IconButton>
                        </React.Fragment>
                        : <IconButton color="secondary"
                            onClick={this.props.onEdit}>
                            <EditIcon />
                        </IconButton>
                    }
                </Grid>
            </Grid>
        </React.Fragment >;
    }
}
