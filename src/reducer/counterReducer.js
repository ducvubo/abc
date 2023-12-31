import actionTypes from "../action/actionTypes";

const INITIAL_STATE = {
  count: 0,
};

const reducer = (state = INITIAL_STATE, actions) => {
  switch (actions.type) {
    case actionTypes.INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };

    case actionTypes.DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case actionTypes.DOI_NGON_NGU:
      return {
        ...state,
        ngonngu:actions.ngonngu
      };
    default:
      return state;
  }
};

export default reducer;
