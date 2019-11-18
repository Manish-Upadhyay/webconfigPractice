import { ADD_NOTE, DELETE_NOTE } from "../constants/actionTypes/actionTypes";

const initialState = {
  notes: [{ id: "1", content: "Note App" }]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_NOTE:
      return { ...state, notes: [...state.notes, action.payload] };

    default:
      return state;
  }
}
