import React from 'react';
import CartItem from '../../containers/CartItem';
import PropTypes from 'prop-types';


const Cart = ({ items, total, currency}) => {
    return (
        <div>
            <h3>Shopping Cart</h3>

            <div className="cart">
                <div className="panel panel-default">
                    <div className="panel-body">
                        {items.length > 0 && (
                            <ul>
                                {items.map(item => (
                                  <li key={item.id}>
                                    <CartItem {...item} />
                                  </li>
                                ))}
                            </ul>
                        )}
                        {items.length === 0 && (
                            <div className="alert alert-info">Cart is empty</div>
                        )}
                        <div className="cart__total">Total:{currency}{total}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

Cart.propTypes = {
    items: PropTypes.array,
    total: PropTypes.number,
    currency: PropTypes.string
}

export default Cart;
