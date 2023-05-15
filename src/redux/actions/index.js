// Coloque aqui suas actions
export const ADD_USER = 'ADD_USER';

export const addUser = ({ email }) => ({
  type: ADD_USER,
  payload: email,
});

export const WALLET = 'WALLET';

export const walletData = (walletInfo) => ({
  type: WALLET,
  payload: walletInfo,
});
