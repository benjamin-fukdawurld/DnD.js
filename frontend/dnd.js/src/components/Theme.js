import { createMuiTheme } from '@material-ui/core/styles';
import { blueGrey, grey, red } from '@material-ui/core/colors';

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
            main: grey[700]
        },
        secondary: {
            main: red[900]
        },
        text: {
            primary: grey[50],
            secondary: blueGrey[400]
        },
        background: {
            default: grey[900],
            paper: grey[900]
        }
    }
});

export const styles = {
    app_content: {
        paddingLeft: "1em"
    },
    race_field: {
        width: "50%"
    },
    list: {
        width: "100%",
        maxWidth: 500,
        backgroundColor: theme.palette.background.paper,
    },
    nested_list: {
        backgroundColor: grey[800],
        paddingLeft: theme.spacing(2)
    },
    nested_list_item: {
        paddingLeft: theme.spacing(2)
    },
    editable_item: {
        width: "100%",
        textAlign: "left"
    },
    editable_item_readonly: {
        cursor: 'default'
    }
};
