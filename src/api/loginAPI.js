import { createSession } from "../utils/cookies";

const baseUrl = "http://localhost:5280/";

export const loginAsync = async (username, password) => {
  const response = await fetch(baseUrl + "login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });
  const data = await response.json();

  if (data) {
    createSession(data);
  }

  return data;
};

export const registerAsync = async (username, password) => {
  const response = await fetch(baseUrl + "register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });
  const data = await response.json();
  return data;
};
