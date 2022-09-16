import User from "./Componetns/User";
import Navbar from "./Componetns/Navbar";
import Matchs from "./Componetns/Matchs";
// import jwtDecode from "jwt-decode";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Setting from "./Componetns/Setting";
import Dashboard from "./Componetns/Dashboard";
import NewActivity from "./Componetns/NewActivity";
import Bookings from "./Componetns/Bookings";
import Scoreboard from "./Componetns/Scoreboard";
import Login from "./Componetns/Login";
import PrivateRoute from "./PrivateRoute";



const SideBarLayout = () => {
  return (
    <div className="flex">
      <Navbar />
      <Outlet />
    </div>
  );
};

function App() {
  return (
    <>
      <div className="">
        <Router>
          <Routes>
            <Route exact path="/Login" element={<Login />} />
            <Route element={<PrivateRoute/>}>
              <Route element={<SideBarLayout />}>
                <Route exact path="/" element={<Dashboard />} />
                <Route exact path="/Dashboard" element={<Dashboard />} />
                <Route exact path="/Users" element={<User />} />
                <Route exact path="/Matchs" element={<Matchs />} />
                <Route exact path="/NewActivity" element={<NewActivity />} />
                <Route exact path="/Scoreboard" element={<Scoreboard />} />
                <Route exact path="/Booking" element={<Bookings />} />
                <Route exact path="/Settings" element={<Setting />} />
              </Route>
            </Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
