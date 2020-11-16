import React from 'react';
import { ComboBox } from '../../Common.component';

import { resistanceValues, resistanceFormatter } from '../../../common/ResistanceUtils';

export default function ResistanceValueSelect(props) {
    return <ComboBox
        {...props}
        values={resistanceValues}
        valueFormatter={resistanceFormatter}
    />;
}
