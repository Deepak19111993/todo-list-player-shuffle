// import "./App.css";
import Header from "./Components/Header/Header";
import Content from "./Containers/Content/Content";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate,
  useNavigate,
} from "react-router-dom";
import "./Global.module.scss";
import Dashboard from "./Containers/Dashboard/Dashboard";
import Login from "./Containers/Login/Login";
import { useEffect, useState } from "react";
import PrivateRoutes from "./Components/PrivateRoute/PrivateRoute";
import PublicRoutes from "./Components/PublicRoutes/PublicRoutes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route exact={true} path="/dashboard" element={<Dashboard />} />
        </Route>

        <Route element={<PublicRoutes />}>
          <Route exact={true} path="/" element={<Login />} />
        </Route>
      </Routes>
      {/* <Content /> */}
    </BrowserRouter>
  );
}

export default App;
