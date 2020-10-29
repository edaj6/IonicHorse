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
    .then((response) => {
      if (response.status === 200) {
        setupUser(response);
      };
      console.log(response);
    }, (error) => {
      console.log("not logged in, statuscode " + error.response.status);
    });

  return response;
}

export default loginUser;