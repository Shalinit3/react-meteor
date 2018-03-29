import React from 'react';
import ReactDOM from 'react-dom';
import { Redirect } from 'react-router';
import { Button, FormGroup, Jumbotron } from 'react-bootstrap';
import { withTracker } from 'meteor/react-meteor-data';
import InputField from '../components/inputField';

class Signup extends React.Component {
  constructor(props) {
    super(props)

    this.username=''
    this.password=''
    this.state = {
      username: '',
      redirect: false,
    }
  }

  handleChange = (value, key) => {
    this[key] = value.target.value
  }

  handleSubmit = () => {
    const { username, password } = this
    Meteor.call('signup', { username, password }, (err, res) => {
      if(err) {
        this.setState ({redirect: false})
      } else {
        this.setState ({redirect: true})
      }
    })
  }

  render() {
    const { redirect } = this.state
    if(redirect) {
      return <Redirect to= '/dashboard' />
    }
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
export default withTracker(() => {
  Meteor.subscribe('userData');

  return {
    users: Meteor.users.find({}).fetch(),
  };
})(Signup);

// export default Signup