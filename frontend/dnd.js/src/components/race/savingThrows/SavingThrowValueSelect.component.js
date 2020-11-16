import React, { Component } from 'react';

import { toTitleCase } from '../../../common/Core';
import { ComboBox } from '../../Common.component';

export default class SavingThrowValueSelect extends Component {
    render() {
        return <ComboBox
            {...this.props}
            values={["advantage", "disadvantage"]}
            valueFormatter={toTitleCase}
        />;
    }
}
