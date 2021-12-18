import React from 'react'
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Badge, Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import Cart from './Cart'
import { Link } from 'react-router-dom';

function Navbar() {
    const cartItems = useSelector((state) => state.menuReducers.panier);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <nav>
        <ul className="nav nav-pills" style={{justifyContent: "space-around"}}>
          <li >
            <Link to="/"><Button type="button" variant="outline-warning">Menu</Button></Link>
          </li>
          <li>
            <Link to="/Burgers"><Button type="button" variant="outline-warning">Burgers</Button></Link>
          </li>
          <li>
            <Link to="/Salades"><Button type="button" variant="outline-warning">Salades</Button></Link>
          </li>
          <li>
            <Link to="/Snacks"><Button type="button" variant="outline-warning">Snacks</Button></Link>
          </li>
          <li>
            <Link to="/Desserts"><Button type="button" variant="outline-warning">Desserts</Button></Link>
          </li>
          <li>
            <Link to="/Boissons"><Button type="button" variant="outline-warning">Boissons</Button></Link>
          </li>
          <li>
            <Button type="button" variant="warning" onClick={handleShow}><img src="/panier.png" alt="Bootstrap" width="25" height="25"/> Pannier <Badge bg="light" text="dark">{cartItems.length}</Badge></Button>
          </li>
                  <Modal show={show} onHide={handleClose} animation={false}>
              <Modal.Body><Cart/></Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Fermer
                </Button>
                <Button variant="warning" onClick={handleClose}>
                  Commander
                </Button>
              </Modal.Footer>
            </Modal>
        </ul>
        </nav>
    )
}

export default Navbar
