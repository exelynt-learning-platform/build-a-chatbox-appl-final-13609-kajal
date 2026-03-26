const initialState = {
  messages: [],
  loading: false,
  error: null,
};

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEND_MESSAGE":
      return {
        ...state,
        messages: [...state.messages, { text: action.payload, sender: "user" }],
      };

    case "RECEIVE_MESSAGE":
      return {
        ...state,
        loading: false,
        messages: [...state.messages, { text: action.payload, sender: "ai" }],
      };

    case "LOADING":
      return { ...state, loading: true };

    case "ERROR":
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default chatReducer;