import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import { Field, reduxForm } from 'redux-form';
import { FlatButton } from 'material-ui';
import Input from '../Input';
import Slider from '../Slider';
import './styles.css';

class UserProfileForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  renderInfo() {
    return (
      <div>
        <div className="infoHeader">User Information</div>
        <div className="infoRow"></div>
        <div className="infoRow">
          <Field
            name="firstName"
            component={(firstName) => (
              <Input field={firstName} hintText={'First Name'} />
            )}
          />
          <Field
            name="lastName"
            component={(lastName) => (
              <Input field={lastName} hintText={'Last Name'} />
            )}
          />
        </div>

        <div className="infoRow">
          <Field
            name="userAge"
            component={(userAge) => <Input field={userAge} hintText={'Age'} />}
          />
        </div>
        <Slider />
        <div className="infoRow">
          <Field
            name="gender"
            component={(gender) => <Input field={gender} hintText={'Gender'} />}
          />
        </div>
        <div className="infoRow">
          <Field
            name="city"
            component={(city) => <Input field={city} hintText={'City'} />}
          />
          <Field
            name="country"
            component={(country) => (
              <Input field={country} hintText={'Country'} />
            )}
          />
        </div>
      </div>
    );
  }

  renderButtons() {
    const labelStyles = {
      textTransform: 'none',
      fontFamily: 'Open Sans',
      fontWeight: 600,
    };
    return (
      <div className="infoButton">
        <FlatButton
          label="Continue Profiling"
          containerElement={<Link to="/" />}
          style={{
            color: '#099CEC',
          }}
          labelStyle={labelStyles}
        />
        <FlatButton
          label="Complete Profile"
          type="submit"
          style={{
            color: '#fff',
            backgroundColor: '#099CEC',
          }}
          labelStyle={labelStyles}
        />
      </div>
    );
  }

  render() {
    const { handleSubmit, error } = this.props;
    const err = error ? (
      <span className="loginErrorMessage">{error}</span>
    ) : null;

    return (
      <div className="infoSection">
        <form onSubmit={handleSubmit}>
          {this.renderInfo()}
          {err}
          {this.renderButtons()}
        </form>
      </div>
    );
  }
}

UserProfileForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default UserProfileForm = reduxForm({
  form: 'userProfile',
})(UserProfileForm);
