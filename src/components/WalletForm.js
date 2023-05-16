import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { walletData, actionApi } from '../redux/actions';

class WalletForm extends Component {
  state = {
    id: 0,
    value: '',
    description: '',
    currency: '',
    method: '',
    tag: '',
    exchangeRates: {},
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

  // handleCurrencyChange = ({ target }) => {
  //   const { value } = target;
  //   this.setState({
  //     currency: value,
  //   });
  // }

  // handleMethodChange = ({ target }) => {
  //   const { value } = target;
  //   this.setState({
  //     method: value,
  //   });
  // }

  // handleTagChange = ({ target }) => {
  //   const { value } = target;
  //   this.setState({
  //     tag: value,
  //   });
  // }

  inputCleaner = () => {
    this.setState({
      description: '',
      value: '',
    });
  };

  handleDispatch = () => {
    const { dispatch } = this.props;
    dispatch(walletData(this.state));
    this.inputCleaner();
  };

  render() {
    const { coins } = this.props;
    const { tag, method, currency, value, description } = this.state;
    console.log(coins);
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
          onChange={ this.handleChange }
        >
          {coins.map((currency) => (
            <option key={ currency } value={ currency }>
              {currency}
            </option>
          ))}
        </select>
        <select
          data-testid="method-input"
          value={ method }
          onChange={ this.handleChange }
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
        <select
          data-testid="tag-input"
          value={ tag }
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
  coins: state.wallet.currencies,
});

WalletForm.propTypes = {
  dispatch: propTypes.func.isRequired,
  currencies: propTypes.array.isRequired,
};
export default connect(mapStateToProps)(WalletForm);
