const INITIAL_STATE = {
  auth: null,
  error: null,
  errorStatus: false
};

export default function authReducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    default:
      return state;
  }
}
