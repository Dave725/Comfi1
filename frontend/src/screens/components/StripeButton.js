import React from "react";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(
  "pk_test_51ICuKuKgM9REhsAZTEMKlLOEtUfZx0kRJZt2Jtw9Tr4MEFeIW6T7w3oOBj9hWMIZi7U5sjTWt13Zh7UO4RDaD0ww00WW3n76rO"
);

const StripeButton = ({ quantity, price }) => {
  const handleClick = async () => {
    const data = { quantity, price };

    console.log(quantity);
    const stripe = await stripePromise;

    const response = await fetch("/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const session = await response.json();

    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.log(result.error.message);
    }
  };

  return (
    <button
      type="button"
      role="link"
      onClick={handleClick}
      className="btn btn-block"
      style={{ backgroundColor: "#8bd0f0" }}
    >
      Checkout
    </button>
  );
};

export default StripeButton;
