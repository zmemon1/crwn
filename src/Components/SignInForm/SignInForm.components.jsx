import { useState } from "react";
import { signInWithGooglePopup, createUserDocumentFromAuth, signInAuthUserwithEmailPassword } from "../../utils/firebase/firebase.utils";
import FormInput from "../FormInput/FormInput.components";
import Button from "../Button/Button.Components";
import {SignInContainer, ButtonContainer} from './SignInForm.styles.jsx';

const SignInForm = () => {
    const defaultValues = {
        email: '',
        password: '',
    }
    const [signUpForm, setSignUpForm] = useState(defaultValues);
    const { email, password } = signUpForm;

    const handleChange = (event) => {
        setSignUpForm({ ...signUpForm, [event.target.name]: event.target.value })
    }
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const { user } = await signInAuthUserwithEmailPassword(email, password)
            await createUserDocumentFromAuth(user)
        } catch (error) {
            switch (error.code) {
                case 'auth/wrong-password':
                    alert('incorrect password for email');
                    break;
                case 'auth/user-not-found':
                    alert('no user associated with this email');
                    break;
                default:
                    console.log(error);
            }
        }
    }
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
    };
    return (
        <SignInContainer>
            <h2>Already Have Account ?</h2>
            <form onSubmit={handleSubmit}>
                <FormInput label="Email" type="email" onChange={handleChange} name="email" value={email} />
                <FormInput label="Password" type="password" onChange={handleChange} name="password" value={password} />
                <ButtonContainer>
                    <Button type="submit" >Sign In</Button>
                    <Button type="button" buttonType='google' onClick={logGoogleUser} >Sign In With Google</Button>
                </ButtonContainer>
            </form>
        </SignInContainer>

    )
}
export default SignInForm;