import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51QMU1yCGoWrFmr0VmRhkKtGv49kkUkj8NpH8QwIT3SK24SsdoniCRLYp6Ch2d1e14R0kIZ7I8WSvoiKZPnJm2A9R00v9SlL4Wl";

  const onToken = (token) => {
    console.log("Payment Token:", token);
    alert("Payment Successful!");
  };

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
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
