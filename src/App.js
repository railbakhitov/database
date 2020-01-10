import React from 'react';
import './App.scss';
import HeaderName from './components/Header/HeaderName';
import Navbar from './components/Navbar/Navbar';
import Data from './components/Data/AddData/Data';
import { Switch, Route } from 'react-router-dom';
import About from './pages/About';
import { connect } from 'react-redux';
import loadTestData from './redux/actions/loadTestData';
import RenderData from './components/Data/RenderData/RenderData';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.init();

  }

  componentWillUnmount() {

  }

  render() {
    const { currentID } = this.props;

    return (
      <div className="app">

        <HeaderName />
        <Navbar />
        <Switch>
          <Route path={`/`} exact component={Data} />
          <Route path={`/id${currentID}`} component={RenderData} />
          <Route path={`/Print`} component={null} />
          <Route path={`/About`} component={About} />
        </Switch>


      </div>
    )
  }
}

function msp(state) {
  return {
    'currentID': state.currentParticipant
  }
}

function mdp(dispatch) {
  return {
    init() {
      dispatch(loadTestData())
    }
  }
}

export default connect(msp, mdp)(App);
