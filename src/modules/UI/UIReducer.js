import { OPEN_SIDEBAR, CLOSE_SIDEBAR } from "./UIActions";

const INITIAL_STATE = {
  isSidebarOpen: false
};

export default function UI(state = INITIAL_STATE, action) {
  switch (action.type) {
    case OPEN_SIDEBAR:
      console.log("Action", action.type);
      return {
        ...state,
        isSidebarOpen: true
      };
    case CLOSE_SIDEBAR:
      return {
        ...state,
        isSidebarOpen: false
      };
    default:
      return state;
  }
}
