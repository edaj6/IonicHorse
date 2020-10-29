import axios from "axios";
import url from "./IdentityURL";
import setupUser from "./setupUser";

async function loginUser({ email, password }) {

  const response = await axios
    .post(`${url}/api/users/authenticate`, {
      "Email": email,
      "Password": password,
      "RememberMe": true
    });

    if (response.status === 200) {
      setupUser(response);
      return true;
    }

    return false;
}

export default loginUser;