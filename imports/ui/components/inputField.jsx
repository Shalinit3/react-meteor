import React, { Component, Fragment } from 'react';
import { FormControl, ControlLabel } from 'react-bootstrap';
import PropTypes from 'prop-types';

class InputField extends Component {

  render() {
    return (
      <Fragment>
        <ControlLabel>{this.props.label}</ControlLabel>
        <FormControl
          type={this.props.type}
          className={this.props.class}
          name={this.props.name}
          onChange={this.props.onChange}
          onBlur={this.props.onChange}
          placeholder={this.props.placeholder}
          required={this.props.required}
        />
      </Fragment>

    );
  }
}

InputField.propTypes = {
  name: PropTypes.string,
  class: PropTypes.string,
  required: PropTypes.bool,
};
InputField.defaultProps = {
  required: false,
};

export default InputField;