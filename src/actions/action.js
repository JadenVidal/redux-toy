export const feed = () => async dispatch => {
    dispatch({
      type: 'FEED',
    });
};
export const play = () => async dispatch => {
  dispatch({
    type: 'PLAY',
  });
};
export const tick = () => async dispatch => {
  dispatch({
    type: 'TICK',
  });
};

