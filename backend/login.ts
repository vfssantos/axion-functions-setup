// backend/login.ts
export const GET = ({ username, password }) => {
  if (username === "user" && password === "password") {
    return { status: "success", token: "mock-token" };
  } else {
    return { status: "error", message: "Invalid credentials"};
  }
};
