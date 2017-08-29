import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CartItem extends Component { 
         handleClick = () => {
             const { id, addToCart, removeFromCart, isInCart } = this.props;
        if(isInCart){
            removeFromCart(id);
        }
        else{
            addToCart(id);
        }
    }
    render(){
        const { name, price, currency, imageURL,isInCart } = this.props;
    return (
        
        <div className="cart-item">
          <img src={imageURL} alt="cart" />
                <div className = "cart-item__name">{name}</div>
                    <div className="cart-item__price">{currency}{price} </div>
                    <button
                            className={isInCart ? 'btn btn-danger' : 'btn btn-primary'}
                            onClick ={this.handleClick}
                        >
                            {isInCart ? 'Remove' : 'Add to cart'}
                        </button>
        </div>
    );
    }
}


CartItem.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
    isInCart:PropTypes.bool.isRequired,
    imageURL: PropTypes.string,
    addToCart: PropTypes.func.isRequired,
    removeFromCart: PropTypes.func.isRequired
}

export default CartItem;
