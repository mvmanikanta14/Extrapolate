import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import Navbar from "../pages/Navbar";
import { Link } from 'react-router-dom';
import Clients from "./listing/Clients";



const Sidebars =()=>{



    return(
        <div className="col-md-3">
        

      <Sidebar >
            <Menu>
              <SubMenu label="About the Entity">
                <MenuItem component={<Link to="/basicdetails" />}> Basic Details </MenuItem>
                <MenuItem component={<Link to="/shareholding" />}>Share Holding Pattern</MenuItem>
                <MenuItem>Management</MenuItem>
                <MenuItem>Banking Arrangment & Credit Limits</MenuItem>
                <MenuItem>Company and Group  exposure</MenuItem>
                <MenuItem>Related parties and controlling interest</MenuItem>
                <MenuItem>Audited Financial Statements</MenuItem>
                <MenuItem>Credit History</MenuItem>

              </SubMenu>
              <MenuItem> Documentation </MenuItem>
              <MenuItem> Calendar </MenuItem>
            </Menu>
        </Sidebar>
        
        </div>
    )
}
export default Sidebars;