import { ADD_NOTE, DELETE_NODE } from "../constants/actionTypes/actionTypes";
export const addNote = data => {
  return {
    type: ADD_NOTE,
    payload: data
  };
};
