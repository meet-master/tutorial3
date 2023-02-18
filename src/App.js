import ProfileData from "./components/Profile";
import RegistrationForm from "./components/Registration";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<RegistrationForm/>} />
        <Route exact path="/profile" element={<ProfileData/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
