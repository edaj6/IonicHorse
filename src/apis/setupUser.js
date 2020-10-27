import { setStorageUser, setUser } from "../stores/user";

function setupUser(response) {
  console.log(response);

  const { jwt } = response.data.jwt;
  const { username } = response.data.username;
  const user = { username, jwt };
  setStorageUser(user);
  setUser(user);
}

export default setupUser;