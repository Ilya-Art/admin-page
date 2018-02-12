import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export default class LoginComponent extends React.Component {
    state = {
        open: false,
        loginValue: '',
        passwordValue: ''
    };

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    handleSubmit = () => {
        console.log(this.state.loginValue+'  '+this.state.passwordValue);
        this.handleClose();
    };

    handleLoginChange = (event, newValue) => {
        this.setState({
            loginValue: newValue
        });
    };

    handlePasswordChange = (event, newValue) => {
        this.setState({
            passwordValue: newValue
        });
    };

    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.handleClose}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                onClick={this.handleSubmit}
            />
        ];

        return (
            <div>
                <RaisedButton label="Log in" onClick={this.handleOpen} primary={true}/>
                <Dialog
                    title="Authorize like an administrator"
                    actions={actions}
                    modal={true}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                >
                    <span>
                        Write down your login and password
                    </span>
                    <br/>
                    <TextField floatingLabelText="Login"
                               onChange={this.handleLoginChange}/>
                    <br/>
                    <TextField floatingLabelText="Password"
                               type="password"
                               onChange={this.handlePasswordChange}/>
                </Dialog>
            </div>
        );
    }
}
