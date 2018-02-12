import React, { PureComponent } from 'react';
import styled from 'styled-components';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ToolbarComponent from '../ToolbarComponent';
import AddingForm from '../AddingForm';
import { BrowserRouter as Router} from "react-router-dom";

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align_items: center;
    width: 100%;
    margin-top: 30px;
`;

export default class Content extends PureComponent {
    
    render() {
        return (
            <Router>
                <ContentContainer>
                    <MuiThemeProvider>
                        <ToolbarComponent/>
                        <AddingForm/>
                    </MuiThemeProvider>
                </ContentContainer>
            </Router>
        );
    }
}
