import React from 'react'
import { Card } from 'react-bootstrap'
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from "../JS/Actions/actions";


function EatCard(props) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.menuReducers.panier);
  const handleAdd = (e) => {
    e.preventDefault();
   let elm={
      id:Math.random(),
      title:props.title,
      price:props.price,
    };
    dispatch(addItem(elm));
   
    console.log(cartItems)
  }

    return(<div className="col-sm-6 col-md-4"><div className="thumbnail" style={{padding:"10px"}}>
        <Card style={{ width: '20rem', height:'30rem'}} key={props.id}>
        <Card.Img variant="top" src={props.imageURL} style={{background: "#ffd301"}}/>
        <Card.Body>
          <Card.Title style={{color: "#e7480f",fontSize: "18px"}} >{props.title}</Card.Title>
          <Card.Text>
            {props.description}
          </Card.Text>
          <div  className="price">{props.price} dt</div>
          <button type="submit" className="btn btn-order " style={{paddingBottom:"10px"}} onClick={handleAdd}><img src="./cart.png" alt="Bootstrap" width="25" height="25"/>Commander</button>
        </Card.Body>
      </Card></div></div>
    )
  }

export default EatCard
EatCard.propTypes={
    title:PropTypes.string,
    imageURL:PropTypes.string,
    description:PropTypes.string
   }