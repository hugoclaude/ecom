import React, { Component } from "react";

import SignInForm from "./signinForm";

class SignIn extends Component {
    render() {
        return (
            <div className="sign-in__form">
                <SignInForm />
            </div>
        );
    }
}

export default SignIn;
