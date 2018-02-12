import React, { PureComponent } from 'react';
import styled from 'styled-components';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import {Toolbar, ToolbarGroup, ToolbarSeparator} from 'material-ui/Toolbar';
import LoginComponent from '../LoginComponent';
import { Link } from "react-router-dom";


export default class ToolbarComponent extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            value: 0
        };
        this.handleChange=this.handleChange.bind(this);
    }

    handleChange(event, index, value)
    {
        this.setState({value: value});
    }

    render() {
        return (
            <Toolbar>
                <ToolbarGroup firstChild={true}>
                    <DropDownMenu value={this.state.value} onChange={this.handleChange} maxHeight={200}>
                        <MenuItem value={0} primaryText="Choose action">
                            <Link to="/">

                            </Link>
                        </MenuItem>
                        <MenuItem value={1} primaryText="Add new Cinema">
                            <Link to="/addCinema">

                            </Link>
                        </MenuItem>
                        <MenuItem value={2} primaryText="Add new Movie" >
                            <Link to="/addMovie">

                            </Link>
                        </MenuItem>
                        <MenuItem value={3} primaryText="Add new Services" disabled={true}>
                            <Link to="/addServices">

                            </Link>
                        </MenuItem>
                        <MenuItem value={4} primaryText="Add new Session" >
                            <Link to="/addSession">

                            </Link>
                        </MenuItem>
                    </DropDownMenu>
                </ToolbarGroup>
                <ToolbarGroup>
                    <LoginComponent/>
                </ToolbarGroup>
            </Toolbar>
        );
    }
}
