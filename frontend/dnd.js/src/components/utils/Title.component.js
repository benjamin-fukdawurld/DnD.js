import React from 'react';

import Typography from '@material-ui/core/Typography';
import { NameField } from '../Common.component';

import { nameValidator } from '../../common/Core';

export function Title(props) {
    if (!props.editable)
        return <Typography variant="h5" className={props.className}>
            {props.value}
        </Typography>;

    return <NameField required
        value={props.value}
        ref={props.ref}
        label="Race Name"
        nameValidator={(value) => nameValidator(props.races, value, props.initialValue)}
        onErrorStateChange={props.onErrorStateChange}
        onChange={props.onChange}
        InputProps={props.InputProps}
    />
}
