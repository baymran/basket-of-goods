import React from 'react';
import productModal from '@s/products'
import cart from '@s/cart-model'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { urlBuilder } from '@/routes'
import {observer} from 'mobx-react'

export default observer(function(props){
    let productsCards = productModal.items.map(pr => {
        let btn;
        if(cart.inCart(pr.id)){
            btn = <Button variant="danger" onClick={() => cart.remove(pr.id)}>Remove</Button>
        } else {
            btn = <Button variant="success" onClick={() => cart.add(pr.id)}>Add to cart</Button>
        }
        return <div style={{marginTop: 25}} className="col col-4" key={pr.id}>
            <Card>
                <Card.Body>
                    <Card.Title>{pr.title}</Card.Title>
                    <Card.Text>
                        <strong>Price: {pr.price}</strong>
                    </Card.Text>
                    <Link to={urlBuilder('product', {id: pr.id} )}>
                    Get more...</Link>
                    <hr/>
                    {btn}
                </Card.Body>
            </Card>
        </div>
    })
    return(
        <div>
            <h1>Products page</h1>
            <div className="row">
                {productsCards}
            </div>
        </div>
    )
})