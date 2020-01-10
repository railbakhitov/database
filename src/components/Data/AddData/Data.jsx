import React from 'react';
import '../../../App.scss';
import '../Data.scss';
import formatDate from '../../../utils/formatDate';
import Footer from '../../Footer/Footer';

class Data extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dateRegistration: formatDate(new Date()),
      department: '',
      email: '',
      firstName: '',       
      institute: '',
      lastName: '',
      location: '',
      middleName: '',
      position: '',
      status: '',
      telephone: '',
      university: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.firstNameChange = this.firstNameChange.bind(this);
    this.lastNameChange = this.lastNameChange.bind(this);
    this.middleNameChange = this.middleNameChange.bind(this);
    this.telephoneChange = this.telephoneChange.bind(this);
    this.positionChange = this.positionChange.bind(this);
    this.emailChange = this.emailChange.bind(this);
    this.universityChange = this.universityChange.bind(this);
    this.departmentChange = this.departmentChange.bind(this);
    this.statusChange = this.statusChange.bind(this);
    this.instituteChange = this.instituteChange.bind(this);
    this.locationChange = this.locationChange.bind(this);
  };

  handleSubmit(e) {
    e.preventDefault();
  }

  firstNameChange(e) {
    this.setState({
      firstName: e.target.value
    })
  }

  lastNameChange(e) {
    this.setState({
      lastName: e.target.value
    })
  }

  middleNameChange(e) {
    this.setState({
      middleName: e.target.value
    })
  }

  telephoneChange(e) {
    this.setState({
      telephone: e.target.value
    })
  }

  positionChange(e) {
    this.setState({
      position: e.target.value
    })
  }

  emailChange(e) {
    this.setState({
      email: e.target.value
    })
  }

  universityChange(e) {
    this.setState({
      university: e.target.value
    })
  }

  departmentChange(e) {
    this.setState({
      department: e.target.value
    })
  }

  statusChange(e) {
    this.setState({
      status: e.target.value
    })
  }

  instituteChange(e) {
    this.setState({
      institute: e.target.value
    })
  }

  locationChange(e) {
    this.setState({
      location: e.target.value
    })
  }

  render() {

    return (
      <div className="page">

        <div className="data datapos-block1">
          <label className="app-heading">Личные данные участника</label>

          <input
              autoComplete="off"
            className="app-mt-20 form-control form-control-sm"
            type="text"
            placeholder="Фамилия" 
            value={ this.state.lastName } 
            onChange={ this.lastNameChange } 
            name="lastName"
          />

          <input
              autoComplete="off"
            className="app-mt-10 form-control form-control-sm"
            type="text"
            placeholder="Имя" 
            value={ this.state.firstName } 
            onChange={ this.firstNameChange } 
            name="firstName"
          />


          <input
              autoComplete="off"
            className="app-mt-10 form-control form-control-sm"
            type="text"
            placeholder="Отчество" 
            value={ this.state.middleName } 
            onChange={ this.middleNameChange } 
            name="middleName"
          />

          <input
              autoComplete="off"
            className="app-mt-10 form-control form-control-sm"
            type="text"
            placeholder="Электронная почта" 
            value={ this.state.email } 
            onChange={ this.emailChange } 
            name="email"
          />

          <input
              autoComplete="off"
            className="app-mt-10 form-control form-control-sm"
            type="text"
            placeholder="Телефон" 
            value={ this.state.telephone } 
            onChange={ this.telephoneChange } 
            name="telephone"
          />

          <input
              autoComplete="off"
            className="app-mt-10 form-control form-control-sm"
            type="text"
            placeholder="Город" 
            value={ this.state.location } 
            onChange={ this.locationChange } 
            name="location"
          />

          <input
              autoComplete="off"
            disabled="true"
            className="app-mt-10 form-control form-control-sm"
            type="text"
            value={this.state.dateRegistration} />

        </div>

        <div className="datadif datapos-block2">
          <div className="app-heading2">Данные по месту деятельности</div>

          <input
              autoComplete="off" 
              className="app-mt-15 form-control form-control-sm" 
              type="text" 
              placeholder="Университет" 
              value={ this.state.university }
              onChange={ this.universityChange } 
              name="university"
          />

          <input
              autoComplete="off" 
              className="app-mt-10 form-control form-control-sm" 
              type="text" 
              placeholder="Институт/факультет" 
              value={ this.state.institute } onChange={ this.instituteChange } name="institute"
          />

          <input
              autoComplete="off" 
              className="app-mt-10 form-control form-control-sm" 
              type="text" 
              placeholder="Кафедра" 
              value={ this.state.department } 
              onChange={ this.departmentChange } 
              name="department"
          />

          <input
              autoComplete="off" 
              className="app-mt-10 form-control form-control-sm" 
              type="text" 
              placeholder="Статус" 
              value={ this.state.status } 
              onChange={ this.statusChange }
              name="status"
          />

          <input
              autoComplete="off" 
              className="app-mt-10 form-control form-control-sm" 
              type="text" 
              placeholder="Должность" 
              value={ this.state.position } 
              onChange={ this.positionChange } 
              name="position"
          />

        </div>

        <Footer data={this.state} />

      </div>
    )
  }
};

export default Data;