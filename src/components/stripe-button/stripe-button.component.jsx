import React from 'react';
import StripeChekout from 'react-stripe-checkout';
import './stripe-button.styles.scss';

const StripeChekoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishablekey = 'pk_test_51ITF17Luv5tC42J1Md7gTee9KqXA3RBd6rfFSzGKUDqL86dHJsGDcVpTP6HCSjyjSJgDRlShD2SzYymFVTyskyWN00qwsjpiNX';

    const onToken = token => {
        console.log(token)
        alert('Payement Successful')
    }
    return (
        <StripeChekout 
            label="Pay Now"
            name="CRWN Clothing Ltd."
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Play Now"
            token={onToken}
            stripeKey={publishablekey}
        />
    );
};

export default StripeChekoutButton ;
