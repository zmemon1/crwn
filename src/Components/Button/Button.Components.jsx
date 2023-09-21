import { ButtonContainer, GoogleSignIn, Inverted } from './Button.styles.jsx'

const BUTTON_STYLE_TYPES = {
    google: GoogleSignIn,
    inverted: Inverted,
    base: ButtonContainer
}

const getButtonStyle = (buttonType = 'base') => BUTTON_STYLE_TYPES[buttonType]


const Button = ({ children, buttonType, ...otherProps }) => {
    const CustomButton = getButtonStyle(buttonType);
    return (
        <CustomButton {...otherProps}>{children}</CustomButton>
    )
}

export default Button;