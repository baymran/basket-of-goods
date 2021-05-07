import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {Form, Button, Modal} from 'react-bootstrap'
import cartModel from '@s/cart-model'
import router from '@s/router'
import { observer } from 'mobx-react'
import orderModel from '@s/order-model'
import { routesMap } from '@/routes'
import {Link} from 'react-router-dom'

class Order extends Component {
    state = {
        showModal: false
    }

    show = () => {
        this.setState({showModal: true})
    }

    hide = () => {
        this.setState({showModal: false})
    }

    confirm = () => {
        this.hide()
        this.props.history.push(routesMap.result)
        console.log(this.props)
    }

    render(){
        let formFields = []

        for(let name in orderModel.formData){
            let field = orderModel.formData[name];
            
            
            formFields.push(
                    <Form.Group key={name} controlId={'order-form-' + name} style={{width: 300}}>
                        <Form.Label>{field.label}</Form.Label>
                        <Form.Control type="text"
                                    value={field.value}
                                    onChange={(e) => orderModel.onChange(name, e.target.value)}/>
                        {field.valid === null || field.valid ? '' : // проверка входящих значений
                            <Form.Text className="text-muted">{field.errorText}</Form.Text>
                        }
                    </Form.Group>
                    
            )
        }

        let currentChoice = cartModel.currentChoice.map((item, i) => {
            cartModel.checkOrder()
            return (
                <div key={i} style={{width: "50%", margin: "0 auto"}}>
                    <span>Позиция:</span>
                    <strong>{item[0]}</strong>
                    <br/>
                    <span>В количестве:</span>
                    <strong>{item[1]}</strong>
                    <hr/>
                </div>
            )
        })

        return(
            <div>
                <h2>Order</h2>
                <hr/>
                <Form>
                    {formFields}
                </Form>
                <hr/>
                <Link to={routesMap.home} className="prevent-a">
                <Button variant="warning" onClick={() => router.moveTo('cart')}>
                    Back to cart
                </Button>
                </Link>
                &nbsp;
                
                <Button variant="primary"
                        onClick={(e) => {cartModel.checkOrder(); this.show(e)}}
                        disabled={!orderModel.formValid}>
                    Apply order
                </Button>
                <Modal show={this.state.showModal} backdrop="static">
                    <Modal.Header>
                        <Modal.Title>Check Information!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Подтвердите заказ:
                        <hr/>
                        {currentChoice}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.hide}>
                        Close
                        </Button>
                        <Button variant="primary" onClick={this.confirm}>
                        Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default observer(Order);