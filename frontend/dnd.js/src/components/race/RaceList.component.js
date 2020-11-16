import React, { Component } from 'react';
import Axios from 'axios';

import List from '@material-ui/core/List';
import { ListItemLink } from '../Common.component'

export default class RaceList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            races: []
        }
    }

    componentDidMount() {
        Axios.post('http://localhost:5000/races', { name: true })
            .then(res => {
                this.setState({ races: res.data })
            });
    }

    render() {
        return <List>
            {this.state.races.map(race =>
                <ListItemLink key={race._id} primary={race.name} to={"/races/" + race._id} />
            )}
        </List>;
    }
}
