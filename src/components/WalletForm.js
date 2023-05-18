import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { actionApi, expenseData } from '../redux/actions';

class WalletForm extends Component {
  state = {
    id: 0,
    value: '',
    description: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(actionApi());
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  inputCleaner = () => {
    this.setState({
      description: '',
      value: '',
    });
  };

  handleDispatch = async () => {
    const { dispatch } = this.props;
    const { id } = this.state;
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const apiResponse = await response.json();
    const expenseWithRates = {
      ...this.state,
      exchangeRates: apiResponse,
    };
    dispatch(expenseData(expenseWithRates));
    this.inputCleaner();
    this.setState({
      id: id + 1,
    });
  };

  render() {
    const { currencies } = this.props;
    const { tag, method, currency, value, description } = this.state;
    return (
      <main>
        <div>
          <input
            data-testid="value-input"
            type="text"
            name="value"
            value={ value }
            onChange={ this.handleChange }
          />
        </div>
        <div>
          <input
            data-testid="description-input"
            name="description"
            type="text"
            value={ description }
            onChange={ this.handleChange }
          />
        </div>
        <select
          data-testid="currency-input"
          value={ currency }
          name="currency"
          onChange={ this.handleChange }
        >
          {currencies.map((curr) => (
            <option key={ curr } value={ curr }>
              {curr}
            </option>
          ))}
        </select>
        <select
          data-testid="method-input"
          value={ method }
          name="method"
          onChange={ this.handleChange }
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
        <select
          data-testid="tag-input"
          value={ tag }
          name="tag"
          onChange={ this.handleChange }
        >
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
        <button
          onClick={ this.handleDispatch }
        >
          Adicionar Despesa
        </button>
      </main>
    );
  }
}
const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  exchangeRates: state.wallet.exchangeRates,
});

WalletForm.propTypes = {
  dispatch: propTypes.func.isRequired,
  currencies: propTypes.string.isRequired,
};
export default connect(mapStateToProps)(WalletForm);
