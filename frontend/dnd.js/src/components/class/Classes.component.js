import React, { Component } from 'react';

import TextField from '../fdui/TextField.component';

export default class Classes extends Component {
    render() {
        return <div classame="Classes">
            <TextField
                value="Classes"
                valueValidator={(value) => {
                    return {
                        error: true,
                        helperText: "test"
                    };
                }}
            />
        </div>;
    }
}
