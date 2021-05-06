import React, {Component} from 'react';
import cartModel from '@s/cart-model'
import orderModel from '@s/order-model'
import { observer } from 'mobx-react'

class Result extends Component {
    render(){
        return(
            <div>
                <h2>Congratulations!</h2>
                <p>Спасибо вам, {orderModel.data.name}, конечно за обращение</p>
                <p>Итоговый счет у вас будет порядка {cartModel.total}</p>
                <p>Мы с вами свяжемся по номеру: {orderModel.data.phone}</p>
            </div>
        )
    }
}

export default observer(Result);