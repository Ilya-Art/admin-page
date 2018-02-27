import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import { Toolbar, ToolbarGroup } from "material-ui/Toolbar";
import styled from "styled-components";
import MenuItem from "material-ui/MenuItem";
import DropDownMenu from "material-ui/DropDownMenu";
import LoginComponent from "../LoginComponent";
import './index.css';

export default class ToolbarComponent extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            actionChangeHandle: props.actionChangeHandle
        };
    };

    handleChange = (event, index, value) => {
        this.setState({ value: value });
        this.state.actionChangeHandle();
    };

    render() {
        return (
            <Toolbar>
                <ToolbarGroup firstChild={true}>
                    <DropDownMenu value={this.state.value} onChange={this.handleChange} maxHeight={200}>
                        <MenuItem value={0}
                                  primaryText={<Link to="/" className="custom">
                                                    Choose action
                                               </Link>}
                        >
                        </MenuItem>
                        <MenuItem value={1}
                                  primaryText={<Link to="/addCinema" className="custom">
                                                    Add new Cinema
                                               </Link>}
                        >
                        </MenuItem>
                        <MenuItem value={2}
                                  primaryText={<Link to="/addMovie" className="custom">
                                                    Add new Movie
                                               </Link>}
                        >
                        </MenuItem>
                        <MenuItem value={3}
                                  primaryText={<Link to="/addServices" className="custom">
                                                    Add new Services
                                               </Link>
                                  }
                        >
                        </MenuItem>
                        <MenuItem value={4}
                                  primaryText={<Link to="/addSession" className="custom">
                                                    Add new Session
                                               </Link>}
                        >

                        </MenuItem>
                    </DropDownMenu>
                </ToolbarGroup>
                <ToolbarGroup>
                  <LoginComponent />
                </ToolbarGroup>
            </Toolbar>
        );
    }
}
