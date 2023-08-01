import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { RegisterContext } from "../Context/RegisterProvider";

export default function EmailConfirmation() {
  const { isAuth, Logout } = useContext(RegisterContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    if (window.confirm("Are you sure want to log out?")) {
      Logout();
      navigate("/");
    }
  };

  return (
    <div>
      <h1>REGISTER SUCCESS</h1>
      <h3>Here is your token</h3>
      <h3>{isAuth}</h3>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
}
