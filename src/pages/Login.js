import React from 'react';
import { addUser } from '../redux/actions';
import { connect } from 'react-redux';

const six = 6;

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    isDisabled: true
  };

  handleChange = ({ target }) => {
    const { name } = target;
    const  value  = target.value;
    this.setState({
      [name]: value,
    }, this.verify);
  };

  verify = () => {
    const {email, password } = this.state;
    const regexEmail = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    const verifyEmail = regexEmail.test(email)
    if (email.length >= 6 && password.length >= 6 && verifyEmail) {
      this.setState({
        isDisabled: false
      })
    }
     else this.setState({
      isDisabled:true
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { dispatch, history} = this.props;
    dispatch(addUser({ email:this.state.email}));
    history.push('/carteira')
  }

  render() {
    const { isDisabled } = this.state;
    const {email} = this.props
    return (
      <main>
        <div>
          <label>
            Email:
            <input
              name="email"
              type="email"
              onChange={ this.handleChange }
              data-testid = 'email-input'
            />
          </label>
          <label>
            Senha:
            <input
              name="password"
              type="password"
              onChange={ this.handleChange }
              data-testid='password-input'
            />
          </label>
        </div>
        <div>
          <button
            disabled={ isDisabled }
            onClick={this.onSubmit}
          >
            Entrar
          </button>
        </div>
      </main>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    email: state.user.email
  };
};

export default connect(mapStateToProps)(Login);
