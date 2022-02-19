export const CHANGE_BUTTON = "CHANGE_BUTTON";
export const change_button = () => ({
  type: CHANGE_BUTTON,
});

export const button_red = (state = false, action) => {
  switch (action.type) {
    case CHANGE_BUTTON:
      return !state
    default:
      return state;
  }
};
