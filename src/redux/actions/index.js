// Coloque aqui suas actions
export const ADD_USER = 'ADD_USER';

export const addUser = ({ email }) => ({
  type: ADD_USER,
  payload: email,
});

export const WALLET = 'WALLET';

export const walletData = (data) => ({
  type: WALLET,
  payload: Object.keys(data).filter((key) => key !== 'USDT'),
});

export const EXPENSE = 'EXPENSE';

export const expenseData = (expense) => ({
  type: EXPENSE,
  payload: expense,
});

export const EXCHANGE_RATES = 'EXCHANGE_RATES';

export const exchangeRates = (info) => ({
  type: EXCHANGE_RATES,
  payload: info,
});

export const DELETE_EXPENSE = 'DELETE_EXPENSE';

export const deleteExpense = (id) => ({
  type: DELETE_EXPENSE,
  payload: id,
});

const economiesApi = async () => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const apiResponse = await response.json();
  return apiResponse;
};

export const actionApi = () => async (dispatch) => {
  const data = await economiesApi();
  dispatch(walletData(data));
  dispatch(exchangeRates(data));
};
