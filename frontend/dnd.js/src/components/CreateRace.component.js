import React, { Component } from 'react';

export default class CreateRace extends Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event) {
        event.preventDefault();

        window.location = '/races';
    }

    render() {
        return <div></div>;
    }
}
