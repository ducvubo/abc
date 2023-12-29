import { type } from "@testing-library/user-event/dist/type";
import actionTypes from "./actionTypes";

export const increaseCounter = () => ({
  type: actionTypes.INCREMENT,
});

export const decreaseCounter = () => ({
  type: actionTypes.DECREMENT,
});

export const doiNgonNgu = (ngonngu) => ({
  type: actionTypes.DOI_NGON_NGU,
  ngonngu: ngonngu
})
