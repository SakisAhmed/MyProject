import React from 'react'
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { deleteItem } from "../JS/Actions/actions";

function Cart() {
    const cartItems = useSelector((state) => state.menuReducers.panier);
    const dispatch = useDispatch();
    return (
        <div>
            {cartItems.length===0?
            (<div className="cart cart-header">
                    cart is empty
            </div>):
            (<div className="cart cart-header">
                    you have {cartItems.length} in the cart{" "}
            </div>)}
            <div className="cart">
                <ul className="cart-items">
                    {cartItems.map(item=>(
                        <li>
                            <div>1 {item.title}</div>
                            <div  className="right"> 
                            {item.price} dt {" "}
                            <Button variant="outline-warning" size="sm" onClick={() => {dispatch(deleteItem(item.id))}}><img src="/delete.png" alt="Bootstrap" width="20" height="20"/>  Supprimer</Button>
                            </div>
                            
                        </li>
                    ))}

                </ul>
            </div>
            <div  className="cart">
                <div  className="total">
                    <div className="right">
                        total: {" "}
                        {cartItems.reduce((a,c)=> a+c.price,0)} dt
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Cart
