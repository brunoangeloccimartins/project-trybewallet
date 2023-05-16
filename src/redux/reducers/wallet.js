// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { WALLET, walletData } from '../actions';

const WALLET_STATE = {
  currencies: [],
};

const wallet = (state = WALLET_STATE, action) => {
  switch (action.type) {
  case WALLET:
    return { ...state,
      currencies: action.payload,
    };
  default:
    return state;
  }
};

export default wallet;
