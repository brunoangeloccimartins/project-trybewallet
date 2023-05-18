// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { WALLET, EXPENSE, EXCHANGE_RATES } from '../actions';

const WALLET_STATE = {
  currencies: [],
  expenses: [],
  exchangeRates: [],
};

const wallet = (state = WALLET_STATE, action) => {
  switch (action.type) {
  case WALLET:
    return {
      ...state,
      currencies: action.payload,
    };
  case EXPENSE:
    return {
      ...state,
      expenses: [
        ...state.expenses,
        { ...action.payload },
      ],
    };
  case EXCHANGE_RATES:
    return {
      ...state,
      exchangeRates: action.payload,
    };
  default:
    return state;
  }
};

export default wallet;
