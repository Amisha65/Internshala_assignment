import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Login from "./componants/Login";

import CreateAccount from "./componants/CreateAccount";
import SignUp from "./componants/SignUp";
import Home from "./componants/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/createaccount" element={<CreateAccount />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
