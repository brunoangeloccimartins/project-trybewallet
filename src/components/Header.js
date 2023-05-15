import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

class Header extends Component {
  state = {
    totalExpenses: 0,

  };

  render() {
    const { totalExpenses } = this.state;
    const { email } = this.props;
    return (
      <main>
        <p data-testid="email-field">{email}</p>
        <p data-testid="total-field">{totalExpenses}</p>
        <p data-testid="header-currency-field">BRL</p>
      </main>
    );
  }
}
const mapStateToProps = (state) => ({
  email: state.user.email,

});

Header.propTypes = {
  email: propTypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);
