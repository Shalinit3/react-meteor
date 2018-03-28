import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button, FormGroup, Jumbotron } from 'react-bootstrap';

import InputField from '../components/inputField'
Meteor.subscribe('userData');

class Signup extends Component {
  constructor(props) {
    super(props)

    this.username=''
    this.password=''

    this.state = {
      username: '',
    }
  }

  handleChange = (value, key) => {
    this[key] = value.target.value
  }

  handleSubmit = () => {
    const { username, password } = this
   Accounts.createUser({ username, password }, (err, res) => {
    console.log(Meteor.users.find({}).fetch());
   });
    
  }

  render() {
    return (
      <Jumbotron>
        <FormGroup>
          <div className='col-md-6'>
            <InputField
              type='text'
              name='username'
              label='Username'
              onChange={(input) => this.handleChange(input, 'username')}
            />
            <InputField
              type='password'
              name='password'
              label='Password'
              onChange={(input) => this.handleChange(input, 'password')}
            />
            <Button bsStyle="primary" onClick={this.handleSubmit} > Sign Up </Button>
          </div>
        </FormGroup>
      </Jumbotron>

    )
  }
}

export default Signup