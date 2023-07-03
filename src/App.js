import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import { Dashboard } from "./pages/Dashboard";
import Clients from "./pages/listing/Clients";
import AddClients from "./pages/AddEdit/AddEditClient";

import AddAssignment from "./pages/AddEdit/AddEditAssignment";
import Milestone from "./pages/listing/Milestone";
import AddMilestone from "./pages/AddEdit/AddEditMilestone";
import Plans from "./pages/listing/Plans";
import AddEditPlan from "./pages/AddEdit/AddEditPlans";
import RequireAuth from "./pages/RequireAuth";
import User from "./pages/listing/User";
import AddEditUser from "./pages/AddEdit/AddEditUser";
import Appp from "./Appp";
import { Sidebar } from "react-pro-sidebar";
import Sidebars from "./pages/Sidebars";
import Header from "./pages/Header";
import Shareholding from "./pages/listing/Shareholding";



function App(props) {
  return (
   <>
    <Header/>
    
    <Sidebars/>
   
    <Routes>
 
      {/* Unprotected Routes */}
      <Route path="/" element={<LoginPage />} />
      <Route path="/app" element={<Appp />} />
      <Route path="/dashboard" element={<Dashboard />} />

    

    
         {/* Protected Routes */}
        <Route element={<RequireAuth />}>
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          <Route path="/sidebars" element={<Sidebars/>} />
          
          <Route path="/shareholding" element={<Shareholding />} />
          <Route path="/assignment/add" element={<AddAssignment />} />
          <Route path="/assignment/edit/:id" element={<AddAssignment />} />

          <Route path="/basicdetails" element={<Clients />} />
          <Route path="/clients/add" element={<AddClients />} />
          <Route path="/clients/edit/:id" element={<AddClients />} />

          <Route path="/milestone" element={<Milestone />} />
          <Route path="/milestone/add" element={<AddMilestone />} />
          <Route path="/milestone/edit/:id" element={<AddMilestone />} />

          <Route path="/plans" element={<Plans />} />
          <Route path="/plans/add" element={<AddEditPlan />} />
          <Route path="/plans/edit/:id" element={<AddEditPlan />} />

          <Route path="/user" element={<User/>} />
          <Route path="/user/add" element={<AddEditUser/>} />



      </Route>
    </Routes>
    </>
  );
}

export default App;
