import React from 'react';
import PropTypes from 'prop-types';

import IconButton from '@material-ui/core/IconButton';
import CheckIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import RemoveIcon from '@material-ui/icons/RemoveCircle';
import AddIcon from '@material-ui/icons/AddCircle';

export function ValidOrCancel(props) {
    const ValidIcon = props.validIcon;
    const CancelIcon = props.cancelIcon;
    return <React.Fragment>
        <IconButton color="secondary"
            onClick={(event) => {
                event.stopPropagation();
                props.onValid()
            }}>
            <ValidIcon />
        </IconButton>
        <IconButton color="secondary"
            onClick={(event) => {
                event.stopPropagation();
                props.onCancel()
            }}>
            <CancelIcon />
        </IconButton>
    </React.Fragment>
}

ValidOrCancel.propTypes = {
    onValid: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired
}

ValidOrCancel.defaultProps = {
    validIcon: CheckIcon,
    cancelIcon: CancelIcon
};

export function AddButton(props) {
    return <IconButton onClick={props.onClick}>
        <AddIcon {...Object.fromEntries(
            Object.entries(props).filter(([key,]) => key !== 'onClick'))} />
    </IconButton>
}

export function RemoveButton(props) {
    return <IconButton onClick={props.onClick}>
        <RemoveIcon {...Object.fromEntries(
            Object.entries(props).filter(([key,]) => key !== 'onClick'))} />
    </IconButton>
}
