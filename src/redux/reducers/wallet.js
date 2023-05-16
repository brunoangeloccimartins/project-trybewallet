// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { WALLET, walletData } from '../actions';

const economiesApi = async () => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const apiResponse = await response.json();
  return apiResponse;
};

export const actionApi = () => async (dispatch) => {
  const data = await economiesApi();
  const coins = Object.keys(data).filter((key) => key !== 'USDT');
  dispatch(walletData(coins));
};

const WALLET_STATE = {
  currencies: [],
};

const wallet = (state = WALLET_STATE, action) => {
  switch (action.type) {
  case WALLET:
    return { ...state, currencies: action.payload };
  default:
    return state;
  }
};

export default wallet;
