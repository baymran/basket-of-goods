import {makeObservable, observable, computed, action} from 'mobx'

class Cart{
    constructor(){
        makeObservable(this, {
            products: observable,
            checkOrder: action,
            total: computed,
            change: action,
            remove: action,
            onChange: computed
        })
    }
    products = getProducts();
    currentChoice = []

    get total() {
        return this.products.reduce((t, pr) => t + pr.price * pr.current, 0)
    }

    get onChange(){ // борьба за оптимизацию
        return this.products.map((item, i) => {
            return (cnt) => this.change(i, cnt)
        })
    }

    change(i, cnt){
        this.products[i].current = cnt;
    }

    remove(i){
        this.products.splice(i, 1)
    }

    checkOrder(){
        this.currentChoice = []
        for (let key of this.products) {
            if(key.current > 0) {
                let arr = []
                arr.push(key.title, key.current)
                this.currentChoice.push(arr)
            }
        }
    }
}

export default new Cart();









// server API
function getProducts() {
    return [
        {id: 100, title: 'IPhone20X', price: 1000, rest: 10, current: 0},
        {id: 101, title: 'SamsungAAF3', price: 750, rest: 5, current: 0},
        {id: 102, title: 'XiaomiGreenMI5', price: 300, rest: 15, current: 0},
        {id: 103, title: 'Huawei50H', price: 350, rest: 12, current: 0},
        {id: 104, title: 'Nokia', price: 100, rest: 3, current: 0}
    ]
}