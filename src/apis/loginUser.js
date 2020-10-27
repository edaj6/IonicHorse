import axios from "axios";
import url from "./IdentityURL";
import setupUser from "./setupUser";

async function loginUser({ email, password }) {
  const response = await axios
    .post(`${url}/api/users/authenticate`, {
      "Email": email,
      "Password": password,
      "RememberMe": true
    })
    .catch(error => console.log(error));

  if (response) {
    setupUser(response);
  }

  console.log(response)

  return response;
}

export default loginUser;