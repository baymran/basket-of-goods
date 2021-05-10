import {makeObservable, observable, computed, action} from 'mobx'
import productsStore from './products'

class Cart{
    constructor(){
        makeObservable(this, {
            products: observable,
            checkOrder: action,
            prodDetailed: computed,
            inCart: computed,
            total: computed,
            add: action,
            change: action,
            remove: action
        })
    }
    products = []
    currentChoice = []

    get prodDetailed(){
        return this.products.map((pr) => {
            let product = productsStore.getById(pr.id)
            return {...product, cnt: pr.cnt}
        })
    }

    get inCart(){
        return (id) => this.products.some(pr => pr.id === id)
    }

    get total() {
        return this.products.reduce((t, pr) => {
            let product = productsStore.getById(pr.id)
            return t + product.price * pr.cnt;
        }, 0)
    }

    add(id){
        this.products.push({id, cnt: 1});
    }

    change(id, cnt){
        let index = this.products.findIndex(pr => pr.id === id);
        if(index !== -1){
            this.products[index].cnt = cnt;
        }
        
    }

    remove(id){
        let index = this.products.findIndex((pr) => pr.id === id);

        if(index !== -1){
            this.products.splice(index, 1)
        }
        
    }

    checkOrder(){
        this.currentChoice = []
        for (let key of this.products) {
            if(key.cnt > 0) {
                let arr = []
                arr.push(key.title, key.cnt)
                this.currentChoice.push(arr)
            }
        }
    }
}

export default new Cart();
