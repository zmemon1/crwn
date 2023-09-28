import { CardElement, useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js"
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component"
import { PaymentFormContainer, FormContainer } from "./payment-form.style"
import { useSelector } from "react-redux"
import { selectCurrentUser } from "../../store/user/user.selector"
import { useState } from "react"

const PaymentForm = ({ amount }) => {
    const stripe = useStripe();
    const element = useElements();
    const currentUser = useSelector(selectCurrentUser)
    const [isProcessingPayment, setIsProcessingPayment] = useState(false)

    const handlePayment = async (e) => {
        e.preventDefault();
        if (!stripe || !element) return;
        
        if(amount > 0){
            setIsProcessingPayment(true)
            const response = await fetch('/.netlify/functions/create-payment-function', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ amount: amount * 100 }),
            }).then((res) => {
                return res.json();
            });
            const clientSecret = response.paymentIntent.client_secret
            const paymentResult = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: element.getElement(CardElement),
                    billing_details: {
                        name: currentUser ? currentUser?.displayName : 'Guest'
                    }
                }
            })
    
            setIsProcessingPayment(false)
    
            if (paymentResult.error) console.log(paymentResult.error)
            else {
                if (paymentResult.paymentIntent.status === 'succeeded') {
                    alert('PAYMENT SUCCESS')
                }
            }
        }else{
            alert('Please Shop Something')
        }


    }

    return (
        <PaymentFormContainer>
            <FormContainer onSubmit={handlePayment}>
                <h2>Credit Card Payment: </h2>
                <CardElement />
                <Button disabled={isProcessingPayment} buttonType={BUTTON_TYPE_CLASSES.inverted}>Pay Now</Button>
            </FormContainer>
        </PaymentFormContainer>
    )
}

export default PaymentForm;