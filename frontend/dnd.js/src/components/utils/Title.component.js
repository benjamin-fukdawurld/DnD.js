import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';

import Typography from '@material-ui/core/Typography';

import { NameField } from '../Common.component';
import { nameValidator } from '../../common/Core';

const useStyles = makeStyles({
    input: {
        fontSize: "1.5em",
        maxWidth: 400
    },
});

export function Title(props) {
    const classes = useStyles(props);
    if (!props.editable)
        return <Typography variant={props.variant} className={props.className}>
            {props.value}
        </Typography>;

    return <NameField required
        value={props.value}
        ref={props.ref}
        label="Race Name"
        nameValidator={(value) => nameValidator(props.races, value, props.initialValue)}
        onErrorStateChange={props.onErrorStateChange}
        onChange={props.onChange}
        InputProps={Object.assign({
            classes: {
                input: classes.input
            }
        }, props.InputProps)
        }
    />
}

Title.propTypes = {
    variant: PropTypes.string,
    value: PropTypes.string,
    nameValidator: PropTypes.func,
    onErrorStateChange: PropTypes.func,
    onChange: PropTypes.func,
    InputProps: PropTypes.object,
    races: PropTypes.arrayOf(PropTypes.string)
}

Title.defaultProps = {
    variant: "h5",
    nameValidator: (name) => name,
    label: "Name"
}
