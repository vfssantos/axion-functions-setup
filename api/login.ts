
import { create, verify } from "https://deno.land/x/djwt@v2.4/mod.ts";

const users = [
  { username: "user1", password: "password1" },
  { username: "user2", password: "password2" },
];

const key = "your-secret-key"; // Deve ser armazenada em um local seguro

export const POST = async ({ username, password }) => {
  const user = users.find((u) => u.username === username && u.password === password);

  if (!user) {
    throw { status: 401, body: { message: "Invalid username or password" } };
  }

  const jwt = await create({ alg: "HS512", typ: "JWT" }, { username }, key);
  return { status: 200, body: { token: jwt } };
};
