import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser, createFormRecruiter } from "../../actions/authActions";
import { Button, Card, Form, Container, Row, Col } from "react-bootstrap";

class CreateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter1: 0,
      title: "",
      type: "",
      JD: "",
      fields: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.changeCountry = this.changeCountry.bind(this);
    // this.changeState = this.changeState.bind(this);
  }
  onLogout = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };
  // componentDidMount() { //https://reactjs.org/docs/react-component.html#componentdidmount
  //   this.setState({
  //       countries : [
  //           { name: 'Philippines', states: [ 
  //               {name: 'Central Luzon', cities: ['Angeles City', 'Olongapo', 'San Fernando']},
  //               {name: 'NCR', cities: ['Pasay City', 'Makati', 'Marikina']}
  //           ]},
  //           { name: 'United States of America', states: [ 
  //               {name: 'California', cities: ['Sacramento', 'Los Angeles', 'Bakersfield', 'Carson']},
  //               {name: 'Florida', cities: ['Tallahassee', 'Jacksonville']},
  //               {name: 'Illinois', cities: ['Springfield', 'Chicago']},
  //               {name: 'New Jersey', cities: ['Trenton', 'Newark']}
  //           ]},

  //       ]
  //   });
  // }

  // changeCountry(event) {
  //   this.setState({selectedCountry: event.target.value});
  //   this.setState({states : this.state.countries.find(cntry => cntry.name === event.target.value).states});
  // }

  // changeState(event) {
  //   this.setState({selectedState: event.target.value});
  //   const stats = this.state.countries.find(cntry => cntry.name === this.state.selectedCountry).states;
  //   this.setState({cities : stats.find(stat => stat.name === event.target.value).cities});
  // }
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  handleChangeField(event, i) {
    const newFields = this.state.fields;
    if (newFields.length < i + 1) newFields.push({})
    newFields[i] = { ...newFields[i], [event.target.id]: event.target.value }
    this.setState({ fields: newFields });
    console.log(newFields);
  }

  handleAdd1(counter1) {
    console.log(counter1);
    this.setState({ counter1: counter1 + 1 });
  }

  // handleAdd2(counter2) {
  //   console.log(counter2);
  //   this.setState({ counter2: counter2 + 1 });
  // }

  handleSubmit(event) {
    event.preventDefault();

  }

  onSubmit = (e) => {
    e.preventDefault();
    const fields = [];
    for (const [i, obj] of this.state.fields.entries()) {
      if (obj.isRequired == 'on') {
        obj.isRequired = true
      } else {
        obj.isRequired = false
      }
      if (obj.isSelected == 'on') {
        fields.push(obj);
      }
    }
    console.log(fields);
    const newForm = {
      title: this.state.title,
      JD: this.state.JD,
      type: this.state.type,
      fields: fields,
      CID: this.props.auth.user.id
    };
    console.log(newForm)
    this.props.createFormRecruiter(newForm, this.props.history)

    this.setState({
      counter1: 0,
      title: "",
      type: "",
      JD: "",
      fields: []
    });
  };


  addFields(counter1) {
    const list = [];
    for (let i = 0; i < counter1; i++) {
      let num = (i + 1);
      list.push(<div>
        <label>Label:
          <input id='label' name={'label' + num.toString()} onChange={(event) => {
            this.handleChangeField(event, i)
          }} />
        </label>
        <label>
          Short Desc:
          <textarea id='description' name={'description' + num.toString()} onChange={(event) => {
            this.handleChangeField(event, i)
          }}></textarea>
        </label>
        <label>Required:
          <input type="checkbox" id='isRequired' name={'isRequired' + num.toString()} onChange={(event) => {
            this.handleChangeField(event, i)
          }} />
        </label>
        <label>Select
          <input type="checkbox" id='isSelected' name={'select' + num.toString()} onChange={(event) => {
            this.handleChangeField(event, i)
          }} />
        </label>
      </div>);
    }
    return (
      <div>
        {list}
      </div>
    )
  }


  render() {
    const { user } = this.props.auth;
    let counter1 = this.state.counter1;
    let counter2 = this.state.counter2;

    return (
      <>
        <button onClick={() => {
          this.handleAdd1(this.state.counter1);
        }}>ADD</button>
        <br />
        <br />
        <form onSubmit={this.onSubmit}>
          <label> Title:
            <input type="" id="title" name="title" onChange={this.handleChange} />
          </label>
          <br />
          <label> Type:
            <input type="radio" id="type" name="type" value="inf" onChange={this.handleChange} />INF
            <input type="radio" id="type" name="type" value="jnf" onChange={this.handleChange} />JNF
          </label>
          <br />
          <label> Job Desc. :
            <textarea name="JD" id="JD" onChange={this.handleChange} />
          </label>
          <br />
          {/* <div className="form-group">
              <label>Country</label>
              <select className="form-select" placeholder="Country" value={this.state.selectedCountry} onChange={this.changeCountry}>
                  <option>Country</option>
                  {this.state.countries.map((e, key) => {
                      console.log(e);
                      console.log(key);
                      return <option>{e.name}</option>;
                  })}
              </select>
          </div>

          <div className="form-group">
              <label>State</label>
              <select className="form-select" placeholder="State" value={this.state.selectedState} onChange={this.changeState}>
                  <option>State</option>
                  {this.state.states.map((e, key) => {
                      return <option key={key}>{e.name}</option>;
                  })}
              </select>
          </div>
            
          <div className="form-group">
              <label>City</label>
              <select className="form-select" placeholder="City">
                  <option>City</option>
                  {this.state.cities.map((e, key) => {
                      return <option key={key}>{e}</option>;
                  })}
              </select>
          </div> */}
          {this.addFields(this.state.counter1)}
          <div
            className="clearfix"
            style={{ textAlign: "center", margin: "10px 0px" }}
          >
            <Button
              className="btn-fill"
              style={{ width: "200px" }}
              type="submit"
              variant="info"
            >
              Update Profile
            </Button>
          </div>
        </form>
      </>
    );
  }
}

CreateForm.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser, createFormRecruiter })(CreateForm);
