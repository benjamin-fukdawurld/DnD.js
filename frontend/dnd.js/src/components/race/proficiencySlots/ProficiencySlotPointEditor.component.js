import React from 'react';
import { EditableNumber } from '../../Common.component';
import { proficiencyPointFormatter } from '../../../common/ProficiencyUtils';
import { Grid, Typography, IconButton } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/SaveAlt';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    saveButton: {
        paddingTop: 0,
        paddingBottom: 0
    }
})

function ProficiencySlotPointLabel(props) {
    const classes = useStyles();
    const obj = Object.fromEntries(
        Object.entries(props)
            .filter(([key,]) => !['value', 'onSave', 'changed', 'readonly'].includes(key)));
    return <Grid container>
        <Grid item xs={10}>
            <Typography {...obj}>{props.value}</Typography>
        </Grid>
        <Grid item xs={2}>
            {!props.readonly
                && <IconButton color="secondary"
                    disabled={!props.changed}
                    onClick={(event) => {
                        event.stopPropagation()
                        props.onSave(event);
                    }}
                    className={classes.saveButton}
                >
                    <SaveIcon />
                </IconButton>
            }
        </Grid>
    </Grid>
}

export default function ProficiencySlotPointEditor(props) {
    return <EditableNumber
        labelComponent={ProficiencySlotPointLabel}
        editable={props.editable}
        label={"Points"}
        value={props.points}
        onChange={(value) => {
            props.onValid(props.slot, value);
        }}
        labelPropsAdapter={(p) => {
            return {
                value: proficiencyPointFormatter(p.value),
                className: p.className,
                readonly: props.readonly,
                changed: props.changed,
                onSave: props.onSave
            }
        }}
        min={1}
    />;
}
