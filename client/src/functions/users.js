import axios from "axios";

export const Register = async (name, email, password) => {
  try {
    const results = await axios.post(`${process.env.REACT_APP_API}/register`, {
      name,
      email,
      password,
    });
    return results;
  } catch (error) {
    console.log(error);
  }
};

export const login = async (email, password) => {
  try {
    const results = await axios.post(`${process.env.REACT_APP_API}/login`, {
      email,
      password,
    });
    return results;
  } catch (error) {
    console.log(error);
  }
};
