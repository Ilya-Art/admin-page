import React, { PureComponent } from 'react';
import styled from 'styled-components';
import TextField from 'material-ui/TextField';
import { BrowserRouter as Router, Route} from "react-router-dom";

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align_items: center;
    width: 100%;
`;

const Empty = styled.div`
    display: none;
`;

export default class AddingForm extends PureComponent {

    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Empty}/>
                    <Route exact path="/addCinema" render={() => {
                           return (
                                <FormContainer>
                                    <TextField floatingLabelText="Cinema Name"/>
                                    <TextField floatingLabelText="Town"/>
                                    <TextField floatingLabelText="Holes capacity"/>
                                </FormContainer>
                           )
                        }
                    }/>
                </div>
            </Router>
        );
    }
}
