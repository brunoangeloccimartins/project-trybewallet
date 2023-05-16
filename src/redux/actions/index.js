// Coloque aqui suas actions
export const ADD_USER = 'ADD_USER';

export const addUser = ({ email }) => ({
  type: ADD_USER,
  payload: email,
});

export const WALLET = 'WALLET';

export const walletData = (data) => ({
  type: WALLET,
  payload: data,
});

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
