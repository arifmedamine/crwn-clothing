import React from 'react';
import CustomBotton from '../custom-button/custom-buttom.component';
import './cart-dropdown.styles.scss';

const CartDropdown = () => (
    <div className='cart-dropdown'>
    <div className='cart-items'/>
    <CustomBotton>go to the checkout</CustomBotton>
    </div>
)

export default CartDropdown;

