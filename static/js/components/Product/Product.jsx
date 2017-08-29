import React, { Component } from 'react';
import PropTypes from 'prop-types';



class Product extends Component {
    
     handleClick = () => {
        const { id, addToCart, removeFromCart, isInCart } = this.props;

        if (isInCart) {
            removeFromCart(id);
        } else {
            addToCart(id);
        }
    }
    render() {
        const { name, price, currency, imageURL,isInCart } = this.props;
        return (
            <div className="product thumbnail">
                <img src={imageURL} alt="product" />
                <div className = "product__name">{name}</div>
                    <div className="product__price">{currency}{price} </div>
                    <div className="product__button-wrap">
                        <button
                            className={isInCart ? 'btn btn-danger' : 'btn btn-primary'}
                            onClick={this.handleClick}
                        >
                            {isInCart ? 'Remove' : 'Add to cart'}
                        </button>
                    </div>
            </div>
        );
    }
}
Product.propTypes = {	
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number,
    currency: PropTypes.string,
    imageURL: PropTypes.string,
    isInCart: PropTypes.bool.isRequired,
    addToCart: PropTypes.func.isRequired,
    removeFromCart: PropTypes.func.isRequired
}
export default Product;