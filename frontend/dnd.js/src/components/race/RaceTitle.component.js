import React from 'react';
import PropTypes from 'prop-types';
import { Title } from '../Common.component';
import { makeStyles } from '@material-ui/styles';

import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/SaveAlt';
import CancelIcon from '@material-ui/icons/Cancel';

const useStyles = makeStyles({
    root: {
        maxWidth: 530
    },
    title: {
        marginTop: 10
    }
});

export default function RaceTitle(props) {
    const classes = useStyles(props);
    let hasError = false;
    return <React.Fragment>
        <Grid container className={classes.root}>
            <Grid item xs={props.editable ? 9 : 10}>
                <Title
                    editable={props.editable}
                    className={classes.title}
                    value={props.value}
                    initialValue={props.initialValue}
                    nameFieldProps={props.nameFieldProps}
                    onChange={props.onChange}
                    onErrorStateChange={(value) => { hasError = value }}
                    InputProps={props.InputProps}
                    races={props.races}
                />
            </Grid>
            <Grid item xs={props.editable ? 3 : 2}>
                {props.editable ?
                    <React.Fragment>
                        <IconButton color="secondary"
                            disabled={!props.isValid() && !hasError}
                            onClick={props.onSave}>
                            <SaveIcon />
                        </IconButton>
                        <IconButton color="secondary"
                            onClick={props.onCancel}>
                            <CancelIcon />
                        </IconButton>
                    </React.Fragment>
                    : <IconButton color="secondary"
                        onClick={props.onEdit}>
                        <EditIcon />
                    </IconButton>
                }
            </Grid>
        </Grid>
    </React.Fragment >;
}

RaceTitle.propTypes = {
    isValid: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
    editable: PropTypes.bool,
    value: PropTypes.string,
    initialValue: PropTypes.string,
    nameFieldProps: PropTypes.object,
    onChange: PropTypes.func,
    races: PropTypes.arrayOf(PropTypes.string)
}
