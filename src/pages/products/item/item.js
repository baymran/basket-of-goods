import React from 'react';
import productModel from '@s/products'
import { Link } from 'react-router-dom'
import { routesMap } from '@/routes'

export default function(props){
    let id = props.match.params.id
    let product = productModel.getById(id)
    console.log(product)
    return(
        <div>
            <h1>{product.title}</h1>
            <hr/>
            <div>
                <strong>Price: {product.price}</strong>
            </div>
            <Link to={routesMap.home}>back to list</Link>
        </div>
    )
}