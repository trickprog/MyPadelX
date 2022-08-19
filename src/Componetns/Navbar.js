import React from "react";
import SportsTennisIcon from "@mui/icons-material/SportsTennis";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import NewReleasesIcon from "@mui/icons-material/NewReleases";
import LogoutIcon from "@mui/icons-material/Logout";

export default function Navbar() {
  return (
    <>
      <div className="flex flex-col items-center md:items-start bg-blue-700 font-Poppins ">
        <div className="  w-[300px]   h-screen">
          <div className="ml-10 text-white mt-10 mb-7 text-2xl mb-20">
            <h1 style={{ marginTop: 80 }}>My PadelX Panel</h1>
          </div>

          <ul className=" my-2 text-xl  text-white font-small  ">
            <div className="flex flex-col ml-10">
              <a href="/Dashboard" className="flex space-x-4 space-y-7 ">
                <li
                  style={{
                    fontSize: 17,
                    marginBottom: 23,
                  }}
                >
                  <DashboardIcon className="mr-2" /> Dashboard
                </li>
              </a>
              <a href="/Users" className="flex space-x-4 space-y-7">
                <li
                  style={{
                    fontSize: 17,
                    marginBottom: 23,
                  }}
                >
                  <PersonIcon className="mr-2" /> Users{" "}
                </li>
              </a>
              <a href="/Matchs" className="flex space-x-4 space-y-7">
                <li
                  style={{
                    fontSize: 17,
                    marginBottom: 23,
                  }}
                >
                  <SportsTennisIcon className="mr-2" /> Matchs
                </li>
              </a>
              <a href="/NewActivity" className="flex space-x-4 space-y-7">
                <li
                  style={{
                    fontSize: 17,
                    marginBottom: 23,
                  }}
                >
                  <NewReleasesIcon className="mr-2" /> New Activity
                </li>
              </a>
              <a href="/Settings" className="flex space-x-4 space-y-7">
                <li
                  style={{
                    fontSize: 17,
                    marginBottom: 23,
                  }}
                >
                  <SettingsIcon className="mr-2" />
                  Settings
                </li>
              </a>
              <a href="/" className="flex space-x-4 space-y-7">
                <li
                  style={{
                    fontSize: 17,
                    marginBottom: 23,
                  }}
                >
                  <LogoutIcon className="mr-2" />
                  Logout
                </li>
              </a>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}
