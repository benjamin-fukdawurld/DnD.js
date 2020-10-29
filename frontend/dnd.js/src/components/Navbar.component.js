import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

export default class Navbar extends Component {
    toHomePage() {
        window.location = "/";
    }

    toRacesPage() {
        window.location = "/races";
    }

    toClassesPage() {
        window.location = "/classes";
    }

    render() {
        return <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" aria-label="menu" color="secondary">
                    <MenuIcon />
                </IconButton>
                <Button onClick={this.toHomePage}>DnD.js</Button>
                <Button onClick={this.toRacesPage}>Races</Button>
                <Button onClick={this.toClassesPage}>Classes</Button>
            </Toolbar>
        </AppBar>;
    }
}
