import React from 'react';
import {makeObservable, observable, computed, action} from 'mobx'

import Cart from '@p/Cart';
import Order from '@p/Order';
import Result from '@p/Result';


class Router {
    constructor(){
        makeObservable(this, {
            activeRoute: observable,
            component: computed,
            moveTo: action
        })
    }

    routes = {
        cart: () => <Cart/>,
        order: () => <Order/>,
        result: () => <Result/>
    }

    activeRoute = 'cart'

    get component(){
        return this.routes[this.activeRoute]();
    }

    moveTo(route){
        let arr = Object.keys(this.routes)
        arr.indexOf(route) === -1 ? null : this.activeRoute = route;        
    }
    
}

export default new Router();