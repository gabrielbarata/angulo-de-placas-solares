export const SET_REGION = "SET_REGION";
export const setRegion = (region) => ({
  type: SET_REGION,
  region,
});

const INITIAL_STATE = {
  latitude: 0,
  longitude: 0,
  latitudeDelta: 0.009,
  longitudeDelta: 0.009,
};

export const region_red = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_REGION:
      return action.region;
    default:
      return state;
  }
};
