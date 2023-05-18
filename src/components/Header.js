import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

class Header extends Component {
  componentDidMount() {
    this.sumExpenses();
  }

  sumExpenses = () => {
    const { expenses, exchangeRates } = this.props;
    let totalExpenses = 0;

    expenses.forEach((expense) => {
      const { value, currency } = expense;
      const exchangeRate = exchangeRates[currency];
      const exchangeRateAsk = exchangeRate.ask;
      if (exchangeRate) {
        const totalExpense = value * exchangeRateAsk;
        totalExpenses += totalExpense;
      }
    });
    return totalExpenses.toFixed(2);
  };

  render() {
    const { email } = this.props;
    return (
      <main>
        <p data-testid="email-field">{email}</p>
        <p data-testid="total-field">{this.sumExpenses()}</p>
        <p data-testid="header-currency-field">BRL</p>
      </main>
    );
  }
}
const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
  exchangeRates: state.wallet.exchangeRates,
});

Header.propTypes = {
  email: propTypes.string.isRequired,
  expenses: propTypes.shape({
    forEach: propTypes.func,
  }).isRequired,
  exchangeRates: propTypes.shape({
    ask: propTypes.string,
  }).isRequired,
};

export default connect(mapStateToProps)(Header);
