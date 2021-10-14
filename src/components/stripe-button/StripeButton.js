import './StripeButton.scss'
import StripeCheckout from 'react-stripe-checkout'

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100
  const publishableKey =
    'pk_test_51Jjr0JDnH07oNHZUEz0uOiBTN3tSNppoD3wUlPmkAEfg1BkZcbXcDCL41GVTn1qlYP644iIHr31VSWTrFoTKVNbI00mvdIVxXs'
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={token => {
        console.log(token)
        alert('Payment Successful')
      }}
      stripeKey={publishableKey}
    />
  )
}

export default StripeButton
