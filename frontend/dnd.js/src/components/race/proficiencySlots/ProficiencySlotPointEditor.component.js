import React, { Component } from 'react';
import { EditableNumber } from '../../Common.component';
import { proficiencyPointFormatter } from '../../../common/ProficiencyUtils';
export default class ProficiencySlotPointEditor extends Component {
    render() {
        return <EditableNumber
            editable={this.props.editable}
            label={"Points"}
            value={this.props.points}
            onChange={(value) => {
                this.props.onValid(this.props.slot, value);
            }}
            labelPropsAdapter={(props) => {
                return {
                    primary: proficiencyPointFormatter(props.value),
                    className: props.className
                }
            }}
            min={1}
        />;
    }
}
