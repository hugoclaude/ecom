import React, { Component } from "react";

import { reduxForm, Field } from "redux-form";

import { FormInput } from "../formFields";

class SignInForm extends Component {
    render() {
        const { className } = this.props;
        return (
            <div className={`${className} sign-in-form`}>
                <Field
                    className="sign-in-form__email"
                    name="email"
                    type="email"
                    title="Email"
                    placeholder="Email"
                    component={FormInput}
                />
            </div>
        );
    }
}

SignInForm = reduxForm({
    form: "SignInForm",
})(SignInForm);

export default SignInForm;
