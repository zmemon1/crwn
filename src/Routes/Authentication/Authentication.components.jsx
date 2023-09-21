import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
    
} from '../../utils/firebase/firebase.utils';
import SignUpForm from '../../Components/SignUpForm/SignUpForm.components';
import SignInForm from '../../Components/SignInForm/SignInForm.components';
import {AuthenticationContainer} from './Authentication.styles'

const Authentication = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    };

    return (
        <AuthenticationContainer>
            <SignInForm />
            <SignUpForm />
        </AuthenticationContainer>
    );
};

export default Authentication;