import React from 'react';
import PropTypes from 'prop-types';

import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

export function Toast(props) {
    return <Snackbar open={props.open}
        autoHideDuration={props.duration}
        onClose={props.onClose}
    >
        <Alert
            onClose={props.onClose}
            severity={props.severity}>
            {props.message}
        </Alert>
    </Snackbar>
}

Toast.propTypes = {
    open: PropTypes.bool,
    severity: PropTypes.oneOf(["success", "error", "warning", "info"]),
    message: PropTypes.node,
    duration: PropTypes.number
};

Toast.defaultProps = {
    duration: 5000
};
