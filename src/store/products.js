import {makeObservable, observable, computed, action} from 'mobx'

class Products{
    constructor(){
        makeObservable(this, {
            items: observable,
            prodMap: computed
        })
    }
    items = getProducts();

    get prodMap(){
        let map = {}

        this.items.forEach((pr, i) => {
            map[pr.id.toString()] = i
        })
        return map;
    }

    getById(id){
        let index = this.prodMap[id]
        if(index === undefined){
            return null
        }
        return this.items[index]
    }
}

export default new Products();


// server API
function getProducts() {
    return [
        {id: 100, title: 'IPhone20X', price: 1000, rest: 10},
        {id: 101, title: 'SamsungAAF3', price: 750, rest: 5},
        {id: 102, title: 'XiaomiGreenMI5', price: 300, rest: 15},
        {id: 103, title: 'Huawei50H', price: 350, rest: 12},
        {id: 104, title: 'Nokia', price: 100, rest: 3}
    ]
}