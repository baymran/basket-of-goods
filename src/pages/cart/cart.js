import React, {Component} from 'react';
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container';
import AppMinMax from '@c/minmax'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import IconButton from '@material-ui/core/IconButton'
import 'bootstrap/dist/css/bootstrap.min.css';
import cartModel from '@s/cart-model'
import router from '@s/router'
import {makeAutoObservable} from 'mobx'
import { observer } from 'mobx-react'

class Cart extends Component {
    constructor(props) {
        super(props)
    }

    render(){
        let productsRows =  
            cartModel.products.map((prod, i) => {
            return (
                <tr key={i}>
                    <td>{prod.title}</td>
                    <td>{prod.price}</td>
                    <td>
                        <AppMinMax min={0} max={prod.rest} cnt={prod.current}
                                   onChange={cartModel.onChange[i]} />
                    </td>
                    <td>{prod.price * prod.current}</td>
                    <td><IconButton onClick={() => cartModel.remove(i)} aria-label="delete"><DeleteOutlineIcon /></IconButton></td>
                </tr>
            );
        });
        return(
        <Container>
            <h2>Card</h2>
                <table>
                    <thead>
                        <tr>
                            <td>Title</td>
                            <td>Price</td>
                            <td>Count</td>
                            <td style={{width: "100px"}}>USD</td>
                            <td>Delete</td>
                        </tr>
                    </thead>
                    <tbody>
                        {productsRows}
                    </tbody>
                </table>
                <strong>Total: $ {cartModel.total}</strong>
                <div style={{margin: "70px 0"}}></div>
                <Button size="large" variant="outlined"color="primary" onClick={() => router.moveTo('order')}>Оформить заказ</Button>
        </Container>
        )
    }

}

export default observer(Cart);