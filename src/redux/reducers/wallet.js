// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { walletData } from "../actions"
const WALLET_STATE = {}

const wallet = (state = WALLET_STATE, action = walletData) => {
  switch (action.type) {
    default:
      return state
  }
}

export default wallet