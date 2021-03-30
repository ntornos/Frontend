import { userInterfaceTypes } from './userInterface.types';

const INITIAL_STATE = {
  dropdownHidden: true,
};

// reducer
const userInterfaceReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userInterfaceTypes.TOGGLE_MENU:
      return { ...state, dropdownHidden: !state.dropdownHidden };
    default:
      return state;
  }
};

export default userInterfaceReducer;
