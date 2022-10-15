import axios from "axios";

const API_URL = "/api/goals/";

const createGoal = async (goalData, token) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.post(API_URL, goalData, config);

    return response;
  } catch (err) {
    return err.response;
  }
};

const getGoals = async (token) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.get(API_URL, config);

    return response;
  } catch (err) {
    return err.response;
  }
};

const deleteGoal = async (goalId, token) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.delete(API_URL + goalId, config);

    return response;
  } catch (err) {
    return err.response;
  }
};
export { createGoal, getGoals, deleteGoal };
