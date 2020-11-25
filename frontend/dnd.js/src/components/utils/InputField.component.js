import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import { ValidOrCancel } from '../Common.component';

export default function InputField(props) {
    const child = React.Children.only(props.children);
    return <Grid container spacing={0}>
        <Grid item xs={9}>
            {React.cloneElement(child, {
                onKeyUp: (event) => {
                    if (event.key === 'Escape') {
                        props.onCancel();
                    } else if (event.key === 'Enter') {
                        props.onChange();
                    }
                }
            })}
        </Grid>
        <Grid item xs={3}>
            <ValidOrCancel
                onValid={() => {
                    props.onChange();
                }}
                onCancel={() => {
                    props.onCancel();
                }}
            />
        </Grid>
    </Grid>;
}

InputField.propTypes = {
    onChange: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired
};
