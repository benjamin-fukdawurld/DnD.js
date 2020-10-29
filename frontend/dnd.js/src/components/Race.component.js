import React, { Component } from 'react';
import RaceModel from '../models/Race';
import Abilities from './Abilities.component';
import { Container, Row, Col } from 'react-bootstrap';
import Axios from 'axios';

import { Alignement } from './Common.component'

export default class Race extends Component {
    constructor(props) {
        super(props);
        this.state = {
            race: new RaceModel(props.race)
        }
    }

    componentDidMount() {
        const { id } = this.props.match.params
        console.log(id);
        Axios.get('http://localhost:5000/races/' + id, { name: true })
            .then(res => {
                this.setState({ race: new RaceModel(res.data) })
            });
    }

    generateRow(name, value) {
        return <Row>
            <Col>{name}</Col>
            <Col>{value}</Col>
        </Row>
    }

    generateContainer(label, obj) {
        let result = []
        for (let [name, value] of Object.entries(obj)) {
            result.push(this.generateRow(name, value));
        }

        return <Row>
            <Col>
                {label}
            </Col>
            <Col>
                <Container>{result}</Container>
            </Col>
        </Row >;
    }

    render() {
        const skills = this.state.race.skills.map((skill) =>
            <Row key={skill}>
                <Col>{skill}</Col>
            </Row>);
        const alignment = this.state.race.alignment.map((alignment) =>
            <Row key={alignment}>
                <Col><Alignement value={alignment} /></Col>
            </Row>);

        return <Container className="races">
            <Row>
                <Col>name</Col>
                <Col>{this.state.race.name}</Col>
            </Row>
            <Row>
                <Col>alignment</Col>
                <Col>{alignment}</Col>
            </Row>
            <Row>
                <Col>speed</Col>
                <Col>{this.state.race.speed}</Col>
            </Row>
            <Row>
                <Col>nightVision</Col>
                <Col>{this.state.race.nightVision}</Col>
            </Row>
            <Row>
                <Col>longRestDuration</Col>
                <Col>{this.state.race.longRestDuration}</Col>
            </Row>
            <Row>
                <Col>skills</Col>
                <Col>{skills}</Col>
            </Row>
            {this.generateContainer("resitances", this.state.race.resistances)}
            {this.generateContainer("spells", this.state.race.spells)}
            <Row>
                <Col>spell slots</Col>
                <Col>{this.state.race.spellSlots}</Col>
            </Row>
            {this.generateContainer("proficiencies", this.state.race.proficiencies)}
            {this.generateContainer("proficiency slots", this.state.race.proficiencySlots)}
            {this.generateContainer("handlers", this.state.race.handlers)}
            <Row>
                <Col>abilities</Col>
                <Col><Abilities abilities={this.state.race.abilities} /></Col>
            </Row>
            <Row>
                <Col>ability slots</Col>
                <Col>{this.state.race.abilitySlots}</Col>
            </Row>
        </Container>;
    }
}
