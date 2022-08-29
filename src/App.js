import { useState } from "react";

import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Login from './components/auth/Login.js';
import Error from './pages/Error';
import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";
import DashboardLayout from "./components/Layout/DashboardLayout";
import HomeAdmin from "./pages/Dashboard/Home/index";
import Customer from "./pages/Dashboard/Customer/Index";
import Transactions from "./pages/Dashboard/Transactions/index";
import Roles from "./pages/Dashboard/Roles/index";
import Devices from "./pages/Dashboard/Devices/index";
import Reports from "./pages/Dashboard/Reports/index"
// import useToken from "./components/auth/useToken";
// import SessionTimeOut from "./components/auth/SessionTimeOut";

function App() {
  
    // const { token, setToken } = useToken();
    const [user, setUser] = useState(null)
  return (
    <>
      <Routes>
        <Route path="/home" element={<Layout />}>
          <Route index element={<Home />} />
           {/* <Route path="login" element={<Login setUser={setToken}></Login>} /> */}
          <Route path="login" element={<Login setUser={setUser}></Login>} />
          <Route path="*" element={<Error />} />
        </Route>

        {/* <Route element={<ProtectedRoute user={token} />}> */}
        {/* <Route element={<ProtectedRoute user={user} />}> */}
          <Route element={<DashboardLayout />}>
            <Route path="/" element={<HomeAdmin />} />
            <Route path="/customer" element={<Customer />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/roles" element={<Roles />} />
            <Route path="/devices" element={<Devices />} />
            <Route path="/reports" element={<Reports />} />
          {/* </Route> */}
        </Route>
      </Routes>
      {/* <SessionTimeOut /> */}
    </>
  );
}

export default App;
