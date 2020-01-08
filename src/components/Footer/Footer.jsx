import React from 'react';
import axios from 'axios';
import '../../App.scss';
import '../../redux/store'
import store from '../../redux/store';
import addPersonData from '../../redux/actions/addPersonData';

class Footer extends React.Component {
    constructor(props) {
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const { data } = this.props;

        axios.post('https://database-knrtu.firebaseio.com/data.json', data );
        store.dispatch(addPersonData(data));

         setTimeout(() => {
            window.location.reload();
        }, 1000);
        
    }

    render() {
        return (
            <div className="footer app-mt-70 app-pl-btn">
                <button type="button" className="btn btn-add" onClick={ this.handleClick }><small>Добавить</small></button>
            </div>
        )
    }
}

export default Footer;