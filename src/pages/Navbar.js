//import React from "react";
import React, { useEffect, useState } from "react";
import UserService from "../services/user.service";
import apiUrlsService from "../services/apiUrls.service";
import { NavLink, useNavigate } from "react-router-dom";
import Header from "./Header";
import tokenService from "../services/token.service";
import Appp from "../Appp";
import { useForm } from "react-hook-form";
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

const Navbar = () => {
const navigate = useNavigate();
const [assignments, setAssignments] = useState();

const {
  register,
  formState: { errors },
} = useForm({
  mode: "onChange",
});
  const logout = () => {
    tokenService.removeUser();
    navigate('/login');
  }
  useEffect(() => {
    getAllAssignments();
  }, []);

  function getAllAssignments() {
    UserService.getAll(apiUrlsService.getAllAssignments).then(
      (response) => {
        // console.log(response.data.assignmentName,"this is assignment")
        setAssignments(response.data);
        console.log(response.data,"tharun")
      },
      (error) => {
        
      }
    );
  }

  return (
    <div className="header">
      <Header />

      <div className="navigation">
        <div className="container">
          <div className="row">
            <nav className="sidenavbar navbar-expand navbar-light">
              <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                  {/* <li className="nav-item">
                    <NavLink className="nav-link" to="/company">
                      {" "}
                      Select Assignment{" "}
                    </NavLink>
                  </li> */}

                      {/* <li className="nav-item">
                          <div className="">
                            <select {...register("assignmentName")} className="form-control">
                                          <option>---select ---</option>
                                          {assignments &&
                                            assignments.map((h, i) => (
                                              <option key={i} value={h.id}>
                                                {"C"+h.client.id+"_A"+h.id+"_"+h.assignmentName}
                                              </option>
                                            ))}
                            </select>
                                        {errors.assignmentName && (
                                          <span className="text-danger">This is required</span>
                                        )}
                          </div>
                      </li> */}
                  {/* <li className="nav-item"><NavLink className="nav-link" exact to="/company"> My office </NavLink></li>  */}

                  {/* <ul className="menus">
                                    {menuitems.map((menu, index) => {
                                      const depthLevel = 0;
                                      return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
                                    })}
                                  </ul> */}

                    

                  {/* <li className="nav-item">
                    <NavLink className="nav-link" to="/clients">
                      {" "}
                      Clients
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/assignment">
                      {" "}
                      Assignment Managments
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/milestone">
                      {" "}
                      Milestone{" "}
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/plans">
                      {" "}
                      Plans{" "}
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/user">
                     Users{" "}
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink className="nav-link">
                    <Appp/>{" "}
                    </NavLink>
                  </li> */}

                 
                 
                  {/* <li className="nav-item">
                    <NavLink className="nav-link"  to="/">
                      Logout
                    </NavLink>
                  </li> */}
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
