import React from 'react';
import '../../../App.scss';
import { connect } from 'react-redux';

class RenderData extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleSubmit(e) {
    e.preventDefault();
  }


  render() {

    const { data, currentID } = this.props;

    /* 
      TODO: пофиксить запись снизу
    */

    let render;

    for(let el of data) {
      const key = Object.keys(el).pop();
      if (key === currentID) {
        render = Object.values(el).pop()
      }
    }

    console.log('render ->', render);

    const { dateRegistration, department, email, firstName, institute, lastName, location, middleName, position, status, telephone, university } = render;

    return (
      <div className="page" style={{ paddingLeft: "15%" }}>

        <div className="data app-mt-20">
          <label className="app-heading">Личные данные участника</label>

          <input
            className="app-mt-20 form-control form-control-sm"
            type="text"
            placeholder="Фамилия" 
            value={ lastName } 
            name="lastName"
          />

          <input
            className="app-mt-10 form-control form-control-sm"
            type="text"
            placeholder="Имя" 
            value={ firstName } 
            name="firstName"
          />


          <input
            className="app-mt-10 form-control form-control-sm"
            type="text"
            placeholder="Отчество" 
            value={ middleName } 
            name="middleName"
          />

          <input
            className="app-mt-10 form-control form-control-sm"
            type="text"
            placeholder="Электронная почта" 
            value={ email } 
            name="email"
          />

          <input
            className="app-mt-10 form-control form-control-sm"
            type="text"
            placeholder="Телефон" 
            value={ telephone } 
            name="telephone"
          />

          <input
            className="app-mt-10 form-control form-control-sm"
            type="text"
            placeholder="Город" 
            value={ location } 
            name="location"
          />

          <input
            disabled="true"
            className="app-mt-10 form-control form-control-sm"
            type="text"
            value={ dateRegistration} />

        </div>

        <div className="datadif app-mt-80">
          <div className="app-heading2">Данные по месту деятельности</div>

          <input 
              className="app-mt-15 form-control form-control-sm" 
              type="text" 
              placeholder="Университет" 
              value={ university }
              name="university"
          />

          <input 
              className="app-mt-10 form-control form-control-sm" 
              type="text" 
              placeholder="Институт/факультет" 
              value={ institute }
          />
              

          <input 
              className="app-mt-10 form-control form-control-sm" 
              type="text" 
              placeholder="Кафедра" 
              value={ department } 
              name="department"
          />

          <input 
              className="app-mt-10 form-control form-control-sm" 
              type="text" 
              placeholder="Статус" 
              value={ status } 
              name="status"
          />

          <input 
              className="app-mt-10 form-control form-control-sm" 
              type="text" 
              placeholder="Должность" 
              value={ position } 
              name="position"
          />

        </div>

      </div>
    )
  }
};

const msp = state => {
  return {
    'data': state.personData,
    'currentID': state.currentParticipant,
  }
}

export default connect(msp, null)(RenderData);