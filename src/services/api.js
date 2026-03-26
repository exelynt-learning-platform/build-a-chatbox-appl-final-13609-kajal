import axios from "axios";

const API_URL = "https://api.openai.com/v1/chat/completions";

export const sendMessageToAI = async (message) => {
  try {
    const response = await axios.post(
      API_URL,
      {
        model: "gpt-4o-mini", 
        messages: [{ role: "user", content: message }],
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
        },
      }
    );

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error("FULL ERROR:", error.response?.data);
    throw error;
  }
};