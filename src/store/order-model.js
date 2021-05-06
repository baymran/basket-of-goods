import {makeObservable, observable, computed, action} from 'mobx'


class Order {
    constructor(){
        makeObservable(this,{
            formData: observable,
            onChange: action,
            formValid: computed,
            data: computed
        })
    }

    formData = {
        name: {
            label: 'Your name',
            value: '',
            validator: val => /^[aA-zZ]{2,}$/.test(val),
            errorText: 'Латинские символы, не менее двух',
            valid: null
        },
        email: {
            label: 'Email address',
            value: '',
            validator: val => /^.+@.+$/.test(val),
            errorText: 'Введите корректный email',
            valid: null
        },
        phone: {
            label: 'Enter your phone',
            value: '',
            validator: val => /^[0-9]{7,15}$/.test(val),
            errorText: 'от 7 до 15 символов',
            valid: null
        }
    }

    get formValid(){
        return Object.values(this.formData).every(item => item.valid)
    }

    get data(){
        let data = {}
        for(let key in this.formData){
            data[key] = this.formData[key].value
        }
        return data;
    }

    onChange(name, value) {
        let field = this.formData[name]
        field.value = value

        field.valid = field.validator(field.value)
    }
}
export default new Order();