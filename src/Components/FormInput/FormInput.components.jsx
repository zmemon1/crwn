import {FormInputTag, Group, FormInputLabel} from './FormInput.styles';

const FormInput = ({ label, ...otherProps }) => {
    return (
        <Group>
            <FormInputTag {...otherProps} />
            {label && (
                <FormInputLabel value={otherProps.value} shrink={otherProps.value.length}>
                    {label}
                </FormInputLabel>
            )}
        </Group>
    )
}

export default FormInput;