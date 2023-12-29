import actionTypes from "../action/actionTypes";

const INITIAL_STATE = {
  count: 0,
  ngonngu:''
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
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
      console.log("check: ",action.ngonngu)
      return {
        ...state,
        ngonngu: action.ngonngu
      };
    default:
      return state;
  }
};

export default reducer;
