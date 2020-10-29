import React, { Component } from 'react';
import AbilitiesModel from '../models/Abilities';

import { Container, Row, Col } from 'react-bootstrap'

export default class Abilities extends Component {
    constructor(props) {
        super(props);
        this.state = {
            abilities: new AbilitiesModel(props.abilities)
        };
    }

    getAbilityRow(name, value) {
        return <Row className="ability-row">
            <Col className="ability-name">{name}</Col>
            <Col className="ability-value">{value > 0 ? "+" + value : value}</Col>
        </Row>;
    }

    render() {
        return <Container className="abilities">
            {this.getAbilityRow("strength", this.state.abilities.strength)}
            {this.getAbilityRow("dexterity", this.state.abilities.dexterity)}
            {this.getAbilityRow("constitution", this.state.abilities.constitution)}
            {this.getAbilityRow("intelligence", this.state.abilities.intelligence)}
            {this.getAbilityRow("wisdom", this.state.abilities.wisdom)}
            {this.getAbilityRow("charisma", this.state.abilities.charisma)}
        </Container>;
    }
}
