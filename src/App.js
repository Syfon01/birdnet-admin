import { useState } from "react";

import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from './components/Home';
import Login from './components/auth/Login';
import Error from './components/Error';
import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";
import DashboardLayout from "./components/Dashboard/Layout/DashboardLayout";
import Customer from "./components/Dashboard/Customer/index";
import Transactions from "./components/Dashboard/Transactions/index";
import Roles from "./components/Dashboard/Roles/index";
import Devices from "./components/Dashboard/Devices/index";
import Reports from "./components/Dashboard/Reports/index"


function App() {
  const [user, setUser] = useState(null)
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login setUser={setUser}></Login>} />
          <Route path="*" element={<Error />} />
        </Route>

        <Route element={<ProtectedRoute user={user} />}>
          <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<Customer />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/roles" element={<Roles />} />
            <Route path="/devices" element={<Devices />} />
            <Route path="/reports" element={<Reports />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
