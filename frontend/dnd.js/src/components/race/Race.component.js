import React, { Component } from 'react';
import RaceModel from '../../models/Race';
import Axios from 'axios';
import { List, Toast, EditableNumber } from '../Common.component';

import Alignments from './Alignments.component';
import ProficiencySlotList from './ProficiencySlotList.component';
import Proficiencies from './Proficiencies.component';
import Skills from './Skills.component';
import RaceTitle from './RaceTitle.component';
import Resistances from './Resistances.component';
import SavingThrows from './SavingThrows.component';
import Abilities from './Abilities.component';
import Handlers from './Handlers.component';

import ListItem from '@material-ui/core/ListItem';

import { styles } from '../Theme'
import { withStyles } from '@material-ui/core/styles';

class Race extends Component {
    #raceNames;
    #initialRace;
    constructor(props) {
        super(props);
        this.#raceNames = [];
        this.initialRace = props.race;
        this.state = {
            race: new RaceModel(props.race),
            editable: props.editable,
            nameFieldState: {
                error: false,
                helperText: ""
            },
            toastState: {
                open: false
            }
        }

        this.updateRace = this.updateRace.bind(this);
        this.onEditPressed = this.onEditPressed.bind(this);
        this.onCancelPressed = this.onCancelPressed.bind(this);
        this.onSavePressed = this.onSavePressed.bind(this);
        this.closeToast = this.closeToast.bind(this);
    }

    get initialRace() { return this.#initialRace; }
    set initialRace(race) {
        this.#initialRace = JSON.parse(JSON.stringify(race) || "{}");
    }
    get classes() { return this.props.classes; }
    get isEditable() { return !!this.state.editable; }
    set isEditable(editable) { this.setState({ editable: !!editable }); }
    get race() { return this.state.race; }

    componentDidMount() {
        const { id } = this.props.match.params;
        if (!id) {
            this.isEditable = true;
            return;
        }

        Axios.get('http://localhost:5000/races/' + id)
            .then(res => {
                this.initialRace = res.data;
                this.setState({ race: new RaceModel(res.data) })
            })
            .catch(res => {
                this.setState({
                    editable: false,
                    toastState: {
                        open: true,
                        severity: "error",
                        message: res.response.data
                    }
                });
            });
    }

    updateRace(obj) {
        let race = this.race;
        race.assign(obj);
        this.setState({ race: this.race });
    }

    onEditPressed() {
        this.isEditable = true;
        Axios.post('http://localhost:5000/races', { name: true })
            .then(res => {
                this.#raceNames = res.data.map(race => race.name.toLowerCase());
            });
    }

    onCancelPressed() {
        this.setState({
            editable: false,
            race: new RaceModel(this.initialRace)
        });
    }

    onSavePressed() {
        const { id } = this.props.match.params;
        this.isEditable = false;
        Axios.patch('http://localhost:5000/races/' + id, this.race)
            .then(res => {
                this.initialRace = this.race;
                this.setState({
                    toastState: {
                        open: true,
                        severity: "success",
                        message: res.data
                    }
                });
            })
            .catch(err => {
                this.setState({
                    editable: false,
                    toastState: {
                        open: true,
                        severity: "error",
                        message: err.response.data
                    }
                });
            });
    }

    closeToast() {
        this.setState({
            toastState: {
                open: false
            }
        });
    }

    render() {
        return <React.Fragment>
            <Toast {...this.state.toastState} onClose={this.closeToast} />
            <RaceTitle
                editable={this.isEditable}
                value={this.race.name}
                initialValue={this.initialRace?.name}
                nameFieldProps={this.state.nameFieldState}
                className={this.classes.race_name}
                races={this.#raceNames}
                onChange={(name) => this.updateRace({ name })}
                InputProps={{
                    classes: {
                        input: this.classes.H5_input
                    }
                }}
                isValid={this.race.isValid.bind(this.race)}
                onSave={this.onSavePressed}
                onCancel={this.onCancelPressed}
                onEdit={this.onEditPressed}
            />
            <List>
                <ListItem>
                    <EditableNumber
                        editable={this.isEditable}
                        className={this.classes.race_field}
                        label="Speed"
                        value={this.race.speed}
                        onChange={(event) => this.updateRace({ speed: event.target.value })}
                        min={1}
                        max={100}
                        step={1}
                    />
                </ListItem>
                <ListItem>
                    <EditableNumber
                        className={this.classes.race_field}
                        editable={this.isEditable}
                        label="Night Vison"
                        value={this.race.nightVision}
                        onChange={(event) => this.updateRace({ nightVision: event.target.value })}
                        min={0}
                        max={100}
                        step={1}
                    />
                </ListItem>
                <ListItem>
                    <EditableNumber
                        className={this.classes.race_field}
                        editable={this.isEditable}
                        label="Long Rest Duration"
                        value={this.race.longRestDuration}
                        onChange={(event) => this.updateRace({ longRestDuration: event.target.value })}
                        min={0}
                    />
                </ListItem>
                <Alignments editable={this.isEditable} alignments={this.race.alignments}
                    onChange={(alignments) => this.updateRace({ alignments })}
                />
                <Skills editable={this.isEditable} skills={this.race.skills}
                    onChange={(skills) => this.updateRace({ skills })} />
                <Resistances editable={this.isEditable} resistances={this.race.resistances}
                    onChange={(resistances) => this.updateRace({ resistances })} />
                <SavingThrows editable={this.isEditable} savingThrows={this.race.savingThrows}
                    onChange={(savingThrows) => this.updateRace({ savingThrows })} />
                <Proficiencies editable={this.isEditable}
                    proficiencies={this.race.proficiencies}
                    className={this.classes.race_field}
                />
                <ProficiencySlotList editable={this.isEditable} slots={this.race.proficiencySlots} />
                <Handlers editable={this.isEditable} handlers={this.race.handlers} />
                <Abilities editable={this.isEditable} abilities={this.race.abilities} />
                <ListItem>
                    <EditableNumber
                        className={this.classes.race_field}
                        editable={this.isEditable}
                        label="Ability Slots"
                        value={this.race.abilitySlots}
                        onChange={(event) => this.updateRace({ abilitySlots: event.target.value })}
                        min={0}
                    />
                </ListItem>
            </List>
        </React.Fragment>;
    }
}

export default withStyles(styles)(Race);
