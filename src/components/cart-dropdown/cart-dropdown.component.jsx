import React from 'react';
import {connect} from 'react-redux'
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom'

import CustomBotton from '../custom-button/custom-buttom.component';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartDropdown = ({cartItems, history, dispatch}) => (
    <div className='cart-dropdown'>
    <div className='cart-items'>
        {
            cartItems.length ?
            (
            cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)
            )
            :
            <span className='empty-message'> Your cart is empty </span>
        }
    </div>
    <CustomBotton onClick={()=> 
    {
        history.push('/checkout');
        dispatch(toggleCartHidden())
    }
    }>go to the checkout</CustomBotton>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));

