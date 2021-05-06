import React, {Component} from 'react';
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';

export default class extends Component {
    static defaultProps = {
        onChange: function(e){},
        nativeProps: {}
    }

    static propTypes = {
        value: PropTypes.any.isRequired,
        onChange: PropTypes.func,
        nativeProps: PropTypes.object
    }

    nativeInput = React.createRef();

    componentDidUpdate(prevProps, prevState){
        let inp = this.nativeInput.current;

        if(prevProps.value !== this.props.value || this.props.value != inp.value) {
            inp.value = this.props.value;
        }
    }

    setValue(value){
        this.nativeInput.current.value = value;
    }

    checkChange = (e) => {
        if(e.target.value.toString() !== this.props.value) {
            this.props.onChange(e)
        }
    }

    checkEnterKey = (e) => {
        if (e.keyCode == 13) {
            this.checkChange(e)
        }
    }
    
    render() {
        return (
            <input {...this.props.nativeProps} variant="outlined" defaultValue={this.props.value} size="small"
                   style={{width: '70px'}}
                   onBlur={this.checkChange}
                   onKeyUp={this.checkEnterKey}
                   ref={this.nativeInput} />
        )
    }
    
}

