import axios from "axios";
import { createContext, useState } from "react";

export const RegisterContext = createContext();

export const RegisterProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const Login = (inputEmail, inputPassword) => {
    setIsError(false);
    setIsLoading(true);
    axios
      .post(`https://reqres.in/api/register`, {
        email: inputEmail,
        password: inputPassword,
      })
      .then((res) => {
        setIsAuth(res.data.token);
      })
      .catch((error) => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const Logout = () => {
    setIsAuth("");
  };

  return <RegisterContext.Provider value={{ isAuth, isLoading, Login, Logout, isError }}>{children}</RegisterContext.Provider>;
};
