import { RegisterProvider } from "./Context/RegisterProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmailConfirmation from "./pages/EmailConfirmation";
import RegisterPage from "./pages/RegisterPage";
import "./App.css";

export default function App() {
  return (
    <>
      <RegisterProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<RegisterPage />} />
            <Route path="/success" element={<EmailConfirmation />} />
          </Routes>
        </BrowserRouter>
      </RegisterProvider>
    </>
  );
}
