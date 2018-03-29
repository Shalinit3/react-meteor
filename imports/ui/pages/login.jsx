import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button, FormGroup, Jumbotron } from 'react-bootstrap';
import { withTracker } from 'meteor/react-meteor-data';

import InputField from '../components/inputField'

class Login extends Component {
  constructor(props) {
    super(props)

    this.username=''
    this.password=''

    this.state = {
      username: '',
    }
  }

  handleChange = (value, key) => {
    this[key] = value
  }

  handleSubmit = () => {
    console.log(this.props.users)
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
            <Button bsStyle="primary" onClick={this.handleSubmit} > Login </Button>
          </div>
        </FormGroup>
      </Jumbotron>

    )
  }
}
export default withTracker(() => {
  Meteor.subscribe('userData');

  return {
    users: Meteor.users.find({}).fetch(),
  };
})(Login);
// export default Login
