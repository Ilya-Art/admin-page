import React, { PureComponent } from "react";
import styled from "styled-components";
import TextField from "material-ui/TextField";
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import { Route } from "react-router-dom";

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
`;

const Empty = styled.div`
    display: none;
`;

export default class AddingForm extends PureComponent {
    render() {
        return (
            <div>
                <Route
                    exact
                    path="/"
                    component={Empty} />
                <Route
                    exact
                    path="/addCinema"
                    render={() => {
                       return (
                            <FormContainer>
                                <TextField floatingLabelText="Cinema Name" />
                                <TextField floatingLabelText="Town" />
                                <TextField floatingLabelText="Holes capacity" />
                            </FormContainer>
                       )
                    }
                    }
                />
                <Route
                  exact
                  path="/addMovie"
                  render={() => {
                       return (
                            <FormContainer>
                                <TextField floatingLabelText="Movie Title" />
                                <DatePicker hintText="Start sessions date" />
                                <DatePicker hintText="End sessions date" />
                                <TextField multiLine="true" rowsMax="5" floatingLabelText="Description" />
                            </FormContainer>
                       )
                    }
                    }
                />
                <Route
                  exact
                  path="/addServices"
                  render={() => {
                       return (
                            <FormContainer>
                                <TextField floatingLabelText="Service Name" />
                                <TextField multiLine="true" rowsMax="5" floatingLabelText="Description" />
                            </FormContainer>
                       )
                    }
                    }
                />
                <Route
                  exact
                  path="/addSession"
                  render={() => {
                       return (
                            <FormContainer>
                                <TextField floatingLabelText="Movie Title" />
                                <TextField floatingLabelText="Cinema Name" />
                                <TextField floatingLabelText="Hole" />
                                <TextField floatingLabelText="Price" />
                                <DatePicker hintText="Date" />
                                <TimePicker
                                  format="24hr"
                                  hintText="Time"
                                  value={null}
                                  minutesStep={5}
                                />
                            </FormContainer>
                       )
                    }
                    }
                />
            </div>
        );
    }
}
