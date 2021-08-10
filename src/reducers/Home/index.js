// others
// import CONSTANTS from "@/constants";

export const initialState = {
  isLoading: false,
  isError: false,
  error: {},
};

export default (state = initialState, { type }) => {
  switch (type) {
    default: {
      return state;
    }
  }
};
