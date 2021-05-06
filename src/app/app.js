import React from 'react'
import AppMinMax from '@c/minmax'
import '../styles/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import router from '@s/router'
import { observer } from 'mobx-react'


class App extends React.Component {

    render() {
        return (
            <Container>
                <button onClick={() => this.forceUpdate()}>UPD</button>
                <hr/>
                {router.component}
            </Container>
        )
    }
}

export default observer(App);








