import React, {PureComponent} from 'react';
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import AppInputLazy from  '@c/lazy'

export default class extends PureComponent {
    static defaultProps = {
        onChange: function(cnt){}
    }

    static propTypes = {
        min: PropTypes.number.isRequired,
        max: PropTypes.number.isRequired,
        cnt: PropTypes.number.isRequired,
        onChange: PropTypes.func
    }

    lazyInput = React.createRef();
    
    set(newCnt) {
        let cnt = Math.min(Math.max(newCnt, this.props.min), this.props.max)
        // сказать наверх что cnt обновился
        this.props.onChange(cnt)
        return cnt
    }

    increase = (incr) => {
        this.set(this.props.cnt + incr)
    }

    decrease = (decr) => {
        this.set(this.props.cnt - decr)
    }

    onChange = (e) => {
        let cnt = parseInt(e.target.value, 10)
        let realCnt = this.set(isNaN(cnt) ? this.props.min : cnt)
        if(realCnt.toString() !== e.target.value){
            console.log('hard set value')
            this.lazyInput.current.setValue(realCnt)
        }
    }
   
    render() {
        console.log('render minmax')
        return (
            <div>
                <Button  onClick={() =>this.decrease(1)} color="primary">-</Button>
                <AppInputLazy value={this.props.cnt}
                              onChange={this.onChange}
                              ref={this.lazyInput}/>
                <Button  onClick={() => this.increase(1)} color="secondary">+</Button>
            </div>
        )
    }
}
