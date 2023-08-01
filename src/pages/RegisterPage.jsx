import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RegisterContext } from "../Context/RegisterProvider";
import "../App.css";

export default function RegisterPage() {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const { isAuth, isLoading, Login, isError } = useContext(RegisterContext);

  const handleEmail = (e) => {
    setInputEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setInputPassword(e.target.value);
  };

  const LoginButton = () => {
    Login(inputEmail, inputPassword);
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      navigate("/success");
    }
  }, [isAuth]);

  if (isLoading) {
    return (
      <div>
        <h1>Loading.......</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>REGISTRATION PAGE</h1>
      <label>Email anda:</label>
      <input type="text" id="name" placeholder="Input Your E-mail" onChange={handleEmail} />
      <br />
      <label>Password :</label>
      <input type="password" id="pass" placeholder="Input Your Password" onChange={handlePassword} />
      <br />
      <div>{isError && <h3 className="merah">Email atau password anda salah</h3>}</div>
      <br />
      <button onClick={LoginButton} type="submit">
        Log In
      </button>
    </div>
  );
}
