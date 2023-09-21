import { useState } from "react";
import { createAuthUserwithEmailPassword,createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import FormInput from "../FormInput/FormInput.components";
import Button from "../Button/Button.Components";
import { SignUpContainer } from './SignUpForm.Styles';
const SignUpForm = () => {
    const defaultValues = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    }
    const [signUpForm, setSignUpForm] = useState(defaultValues);
    const { displayName, email, password, confirmPassword } = signUpForm;
    const handleChange = (event) => {
        setSignUpForm({ ...signUpForm, [event.target.name]: event.target.value })
    }
    const resetFields = () => {
        setSignUpForm(defaultValues)
    }
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert('Password Does Match');
            return;
        }
        try {
            const { user } = await createAuthUserwithEmailPassword(email, password)

            await createUserDocumentFromAuth(user, { displayName })
            resetFields();
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('Cannot create user, email already in use');
            } else {
                console.log('user creation encountered an error', error);
            }
        }
    }

    return (
        <SignUpContainer>
            <form onSubmit={handleSubmit}>
                <h2>Don't Have an Account ?</h2>
                <span>Sign Up Here</span>
                <FormInput label="Name" type="text" onChange={handleChange} name="displayName" value={displayName} />
                <FormInput label="Email" type="email" onChange={handleChange} name="email" value={email} />
                <FormInput label="Password" type="password" onChange={handleChange} name="password" value={password} />
                <FormInput label="Confirm Password" type="password" onChange={handleChange} name="confirmPassword" value={confirmPassword} />
                <Button type='submit'>Sign Up</Button>
            </form>
        </SignUpContainer>

    )
}
export default SignUpForm;