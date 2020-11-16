import React from 'react';

import { List as MuiList, ListItem as MuiListItem, ListItemText as MuiListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { styles } from '../Theme'

const useStyles = makeStyles(styles);

export function List(props) {
    const classes = useStyles();
    return <MuiList className={classes.list} {...props} />
}

export function NestedList(props) {
    const classes = useStyles();
    return <MuiList className={classes.nested_list} {...props} />
}

export function NestedListItem(props) {
    const classes = useStyles();
    return <MuiListItem className={classes.nested_list_item} {...props} />
}

export function ListItemLink(props) {
    const { primary, to } = props;

    const onLinkClicked = () => window.location = to;

    return <MuiListItem button onClick={onLinkClicked}>
        <MuiListItemText primary={primary} />
    </MuiListItem>;
}
