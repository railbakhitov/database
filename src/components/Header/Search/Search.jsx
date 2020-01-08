import React from 'react';
import './search.scss';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import store from '../../../redux/store';
import currentParticipant from '../../../redux/actions/currentParticipant';

const findID = ( fullName, data ) => {
    const lastName = fullName.split(' ').slice().shift();
    let result = null;

    for ( let i = 0; i < data.length; i++ ) {
      const item = data[i];
      console.log(item);
      const id = Object.keys(item).slice().shift();
      const values = Object.values(item).slice().shift();
      console.log(values);
      if ( lastName === values.lastName ) {
        result = id;
        break;
      }
    }

    return result;
  };

class Search extends React.Component {
    constructor(props) {
        super();
        this.state = { 
            searchText: '', 
            id: null 
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e) {
        this.setState({ searchText: e.target.value });
    }

    handleClick() {
        const element = document.getElementById('containerText');
        element.setAttribute('style', 'display: none');
        //store.dispatch(currentParticipant())
    }

    render() {
        const { searchText } = this.state;
        const length = searchText.length;

        let { participants, data } = this.props;
        const count = participants.length;

        participants = participants.filter(
            participant => searchText === participant.substr(0, length)
        );

        const element = document.getElementById('containerText');

        return (
            <form className="form-inline">
                <div className="container">
                    <input 
                        autoComplete="off"
                        type="text"
                        id="searchLine"
                        placeholder="Поиск по Фамилии..."
                        onChange={this.handleChange}
                    />
                    <div className="search"></div>
                </div>
                <div className="containerText" id="containerText">
                    {searchText && participants.map( fullName => {
                        // TODO: Заменить совпадения на жирный

                        const id = findID(fullName, data);
                        element.setAttribute('style','display: block');

                        return (
                            <div className="searchText" >
                                {/* 
                                    TODO: Сделать весь блок ссылкой, а не только текст
                                */}
                                <NavLink 
                                    to={`/id${id}`}
                                    onClick={this.handleClick}
                                >{fullName}
                                </NavLink>
                            </div>
                        )
                    })}
                    {(searchText === '' && element) && element.setAttribute('style', 'display: none')}
                </div>
            </form>
        )
    }
};

const msp = state => {
    return {
        'participants': state.participantList,
        'data': state.personData
    }
}

export default connect(msp, null)(Search);