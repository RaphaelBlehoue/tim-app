// UI Sidebar effect

export const OPEN_SIDEBAR = "OPEN_SIDEBAR";
export const CLOSE_SIDEBAR = "CLOSE_SIDEBAR";

export function openSideBar() {
  return dispatch => {
    dispatch({
      type: OPEN_SIDEBAR
    });
  };
}

export function closeSideBar() {
  return dispatch => {
    dispatch({ type: CLOSE_SIDEBAR });
  };
}
