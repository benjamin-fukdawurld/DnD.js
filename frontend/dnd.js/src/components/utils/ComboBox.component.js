import React from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

import PropTypes from 'prop-types';

export function ComboBox(props) {
    let obj = Object.fromEntries(
        Object.entries(props)
            .filter(([key, value]) => ![
                "valueFormatter",
                "values"
            ].includes(key)));

    return <TextField
        select
        {...obj}
    >
        {props.values.map((value) =>
            <MenuItem key={value} value={value}>
                {props.valueFormatter(value)}
            </MenuItem>
        )}
    </TextField>;
}

ComboBox.propTypes = {
    value: PropTypes.any.isRequired,
    valueFormatter: PropTypes.func,
    label: PropTypes.string
};

ComboBox.defaultProps = {
    valueFormatter: (value) => value,
    label: "Value"
};
