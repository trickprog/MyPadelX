import User from "./Componetns/User";
import Navbar from "./Componetns/Navbar";
import Matchs from "./Componetns/Matchs";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Setting from "./Componetns/Setting";
import Dashboard from "./Componetns/Dashboard";
import NewActivity from "./Componetns/NewActivity";

function App() {
  return (
    <>
      <div className="flex">
        <Navbar />

        <div className="w-full">
          <Router>
            <Routes>
              <Route exact path="/" element={<Dashboard />} />
              <Route exact path="/Dashboard" element={<Dashboard />} />
              <Route exact path="/Users" element={<User />} />
              <Route exact path="/Matchs" element={<Matchs />} />
              <Route exact path="/NewActivity" element={<NewActivity />} />
              <Route exact path="/Settings" element={<Setting />} />
            </Routes>
          </Router>
        </div>
      </div>
    </>
  );
}

export default App;
