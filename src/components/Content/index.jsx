import React, { PureComponent } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import styled from "styled-components";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import ToolbarComponent from "../ToolbarComponent";
import AddingForm from "../AddingForm";

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align_items: center;
    width: 100%;
    margin-top: 30px;
`;

export default class Content extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            actionChosen: false
        };
    }

    actionChangeHandle = () => {
      this.setState({
        actionChosen: !this.state.actionChosen
      });
    };
    
    render() {
      return (
        <Router>
          <ContentContainer>
            <MuiThemeProvider>
              <ToolbarComponent actionChangeHandle={this.actionChangeHandle} />
              <AddingForm actionChosen={this.state.actionChosen} />
            </MuiThemeProvider>
          </ContentContainer>
        </Router>
      );
    }
}
