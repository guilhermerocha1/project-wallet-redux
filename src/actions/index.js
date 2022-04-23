import getEconomia from '../service';

// Coloque aqui suas actions
export const NEW_USER = 'NEW_USER';
export const GET_ECONOMIA = 'GET_ECONOMIA';
export const GET_ECONOMIA_SUCESS = 'GET_ECONOMIA_SUCESS';
export const GET_ECONOMIA_FAIL = 'GET_ECONOMIA_FAIL';
export const SAVE_INFO = 'SAVE_INFO';
export const GET_COIN_SUCESS = 'GET_COIN_SUCESS';
export const GET_COIN_FAIL = 'GET_COIN_FAIL';

export const userAction = (email) => ({
  type: NEW_USER,
  email,
});

export const actionGetEconomia = () => ({
  type: GET_ECONOMIA,
});

export const actionGetEconomiaSucess = (date) => ({
  type: GET_ECONOMIA_SUCESS,
  date,
});

export const actionGetEconomiaFail = (error) => ({
  type: GET_ECONOMIA_FAIL,
  error,
});

export const actionSaveInfo = (info) => ({
  type: SAVE_INFO,
  info,
});

export const actionGetCoinSucess = (coin) => ({
  type: GET_COIN_SUCESS,
  coin,
});

export const actionGetCoinFail = (error) => ({
  type: GET_COIN_FAIL,
  error,
});

export const thunkGetAPIEconomia = () => async (dispatch) => {
  dispatch(actionGetEconomia());
  try {
    const response = await getEconomia();
    const arrObj = Object.keys(response).filter((coin) => coin !== 'USDT');
    dispatch(actionGetEconomiaSucess(arrObj));
  } catch (error) {
    dispatch(actionGetEconomiaFail());
  }
};

export const thunkGetCoin = () => async (dispatch) => {
  dispatch(actionGetCoinSucess());
  try {
    const response = await getEconomia();
    const arrObj = Object.values(response).filter(({ codein }) => codein !== 'BRLT');
    dispatch(actionGetCoinSucess(arrObj));
  } catch (error) {
    dispatch(actionGetCoinFail(error));
  }
};
