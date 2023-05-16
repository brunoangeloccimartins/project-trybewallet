import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { actionApi } from '../redux/reducers/wallet';

class WalletForm extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(actionApi());
  }

  render() {
    const { currencies } = this.props;
    return (
      <main>
        <div>
          <input
            data-testid="value-input"
            type="text"
            name="value"
          />
        </div>
        <div>
          <input
            data-testid="description-input"
            name="description"
            type="text"
          />
        </div>
        <select
          data-testid="currency-input"
        >
          {currencies.map((element) => (
            <option key={ element } value={ element }>
              {element}
            </option>
          ))}
        </select>
        <select data-testid="method-input">
          <option>Dinheiro</option>
          <option>Cartão de crédito</option>
          <option>Cartão de débito</option>
        </select>
        <select data-testid="tag-input">
          <option>Alimentação</option>
          <option>Lazer</option>
          <option>Trabalho</option>
          <option>Transporte</option>
          <option>Saúde</option>
        </select>
      </main>
    );
  }
}
const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

WalletForm.propTypes = {
  dispatch: propTypes.func.isRequired,
  currencies: propTypes.shape({
    map: propTypes.func,
  }).isRequired,
};
export default connect(mapStateToProps)(WalletForm);
