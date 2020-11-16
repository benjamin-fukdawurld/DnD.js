import React from 'react';
import PropTypes from 'prop-types';

import IconButton from '@material-ui/core/IconButton';
import CheckIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';

export function ValidOrCancel(props) {
    const ValidIcon = props.validIcon;
    const CancelIcon = props.cancelIcon;
    return <React.Fragment>
        <IconButton color="secondary"
            onClick={props.onValid}>
            <ValidIcon />
        </IconButton>
        <IconButton color="secondary"
            onClick={props.onCancel}>
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
