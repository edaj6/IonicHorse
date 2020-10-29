import { setStorageUser, setUser } from "../stores/user";

function setupUser(response) {
  console.log("setupUser");
  // console.log(response);
  // console.log(JSON.stringify(response.data));

  const jwt = response.data.jwt;
  const username = response.data.username;
  const user = { username, jwt };

  // console.log(jwt);
  // console.log(username);
  console.log(JSON.stringify(user));

  setStorageUser(user);
  setUser(user);
}

export default setupUser;