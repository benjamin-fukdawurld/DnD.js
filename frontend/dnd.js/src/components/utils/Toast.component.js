import React from 'react';

import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

export function Toast(props) {
    return <Snackbar open={props.open}
        autoHideDuration={5000}
        onClose={props.onClose}
    >
        <Alert
            onClose={props.onClose}
            severity={props.severity}>
            {props.message}
        </Alert>
    </Snackbar>
}
