import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { blueGrey, grey, red } from '@material-ui/core/colors'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export const theme = createMuiTheme({
    overrides: {
        MuiCssBaseline: {
            '@global': {
                html: {
                    background: grey[900]
                }
            }
        }
    },
    palette: {
        primary: {
            main: grey[800]
        },
        secondary: {
            main: red[900]
        },
        text: {
            primary: grey[50],
            secondary: blueGrey[400]
        },
        background: {
            default: grey[900]
        }
    }
});

const alignmentStrings = {
    'LG': 'Loyal Good',
    'LN': 'Loyal Neutral',
    'LE': 'Loyal Evil',
    'NG': 'Neutral Good',
    'N': 'Neutral',
    'NE': 'Neutral Evil',
    'CG': 'Chaotic Good',
    'CN': 'Chaotic Neutral',
    'CE': 'Chaotic Evil'
};

export function Alignement(props) {
    return <span className="alignment-value">{alignmentStrings[props.value]}</span>;
}

export function ListItemLink(props) {
    const { primary, to } = props;

    const onLinkClicked = () => window.location = to;

    return <ListItem button onClick={onLinkClicked}>
        <ListItemText primary={primary} />
    </ListItem>;
}
