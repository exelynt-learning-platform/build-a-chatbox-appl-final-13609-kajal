import { sendMessageToAI } from "../../services/api";

export const sendMessage = (message) => async (dispatch) => {
  try {
    dispatch({ type: "SEND_MESSAGE", payload: message });
    dispatch({ type: "LOADING" });

    const aiResponse = await sendMessageToAI(message);

    dispatch({ type: "RECEIVE_MESSAGE", payload: aiResponse });
  } catch (error) {
    dispatch({ type: "ERROR", payload: "Something went wrong!" });
  }
};