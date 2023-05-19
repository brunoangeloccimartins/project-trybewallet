import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { addUser } from '../redux/actions';

const six = 6;

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    isDisabled: true,
  };

  handleChange = ({ target }) => {
    const { name } = target;
    const { value } = target;
    this.setState({
      [name]: value,
    }, this.verify);
  };

  verify = () => {
    const { email, password } = this.state;
    const regexEmail = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    const verifyEmail = regexEmail.test(email);
    if (email.length >= six && password.length >= six && verifyEmail) {
      this.setState({
        isDisabled: false,
      });
    } else {
      this.setState({
        isDisabled: true,
      });
    }
  };

  onSubmit = (e) => {
    const { email } = this.state;
    e.preventDefault();
    const { dispatch, history } = this.props;
    dispatch(addUser({ email }));
    history.push('/carteira');
  };

  render() {
    const { isDisabled } = this.state;
    return (
      <main>
        <div>
          <h2>TrybeWallet</h2>
          <label>
            Email:
            <input
              name="email"
              type="email"
              placeholder="email@email.com"
              onChange={ this.handleChange }
              data-testid="email-input"
            />
          </label>
          <label>
            Senha:
            <input
              name="password"
              type="password"
              onChange={ this.handleChange }
              data-testid="password-input"
            />
          </label>
        </div>
        <div>
          <button
            disabled={ isDisabled }
            onClick={ this.onSubmit }
          >
            Entrar
          </button>
        </div>
      </main>
    );
  }
}
const mapStateToProps = (state) => ({
  email: state.user.email,
});

Login.propTypes = {
  dispatch: propTypes.func.isRequired,
  history: propTypes.shape({
    push: propTypes.func,
  }).isRequired,
};

export default connect(mapStateToProps)(Login);
