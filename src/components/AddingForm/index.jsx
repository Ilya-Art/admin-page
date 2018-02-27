import React, { PureComponent } from "react";
import styled from "styled-components";
import TextField from "material-ui/TextField";
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import RaisedButton from 'material-ui/RaisedButton';
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

const submitStyles = {
  margin: 15,
};

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
                    render={() =>
                        <FormContainer>
                            <TextField floatingLabelText="Cinema Name" />
                            <TextField floatingLabelText="Town" />
                            <TextField floatingLabelText="Holes capacity" />
                            <RaisedButton label="Submit" primary={true} style={submitStyles} type="Submit"/>
                        </FormContainer>
                    }
                />
                <Route
                  exact
                  path="/addMovie"
                  render={() =>
                      <FormContainer>
                          <TextField floatingLabelText="Movie Title" />
                          <DatePicker hintText="Start sessions date" />
                          <DatePicker hintText="End sessions date" />
                          <TextField multiLine="true" rowsMax="5" floatingLabelText="Description" />
                          <RaisedButton label="Submit" primary={true} style={submitStyles} />
                      </FormContainer>
                    }
                />
                <Route
                  exact
                  path="/addServices"
                  render={() =>
                      <FormContainer>
                          <TextField floatingLabelText="Service Name" />
                          <TextField multiLine="true" rowsMax="5" floatingLabelText="Description" />
                          <RaisedButton label="Submit" primary={true} style={submitStyles} />
                      </FormContainer>
                    }
                />
                <Route
                  exact
                  path="/addSession"
                  render={() =>
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
                          <RaisedButton label="Submit" primary={true} style={submitStyles} />
                      </FormContainer>
                    }
                />
            </div>
        );
    }
}
