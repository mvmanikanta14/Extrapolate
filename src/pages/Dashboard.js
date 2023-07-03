import React from "react";
import  { useEffect, useState } from "react";
import UserService from "../services/user.service";
import apiUrlsService from "../services/apiUrls.service";
import { Link } from 'react-router-dom';
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import Navbar from "./Navbar";
import {
  BsChevronDown,
  BsBriefcase,
  BsSpeedometer2,
  BsChevronUp,
} from "react-icons/bs";
import { GiSpellBook } from "react-icons/gi";
import { BiPencil, BiTrash } from "react-icons/bi";

import { FiCalendar, FiClock, FiPaperclip } from "react-icons/fi";
import Table from "react-bootstrap/Table";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { AiOutlineFieldTime } from "react-icons/ai";
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import Header from "./Header";
import Sidebars from "../pages/Sidebars";


export const Dashboard = (props) => {


  // const dispatch=useDispatch();
  // const [loading,setLoading]=useState(false);
  // const [data,setData]=useState({});

  // React.useEffect(()=>{
  //     fetchUserData().then((response)=>{
  //         setData(response.data);
  //     }).catch((e)=>{
  //         localStorage.clear();
  //         props.history.push('/');
  //     })
  // },[])
  const [clients, setClients] = useState("");
  const [assignments, setAssignments] = useState();
  const [plans, setPlans] = useState();

  function getAllPlans() {
    UserService.getAll(apiUrlsService.getAllPlans).then(
      (response) => {
        setPlans(response.data);
        console.log("tharun",response.data)
      },
      (error) => {
        this.setState({
          content:
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString(),
        });

        if (error.response && error.response.status === 403) {
          //EventBus.dispatch("logout");
        }
      }
    );
  }
  useEffect(() => {
    getAllClients();
    getAllAssignments();
    getAllPlans();

  }, []);
  function getAllClients() {
    UserService.getAll(apiUrlsService.getAllClients).then(
      (response) => {
        if (response) {
          setClients(response.data.length);
          console.log(response.data.length,"this is length")
        }
      },
      (error) => {
      
      }
    );
  }

  function getAllAssignments() {
    UserService.getAll(apiUrlsService.getAllAssignments).then(
      (response) => {
        setAssignments(response.data.length);
        console.log(response.data.length,"tharun")
      },
      (error) => {
        
      }
    );
  }

  // const total=(plans.reduce((total,currentItem) =>  total = total + currentItem.planHour , 0 ));
  // console.log(total,"this is total")

  


            const plans_list = plans
            const totalPlanHours = ""
            if (plans_list && plans_list.length > 0) {
              // Calculate the sum of planHour
              const totalPlanHours = plans_list.reduce((sum, plan) => sum + plan.planHour, 0);

              console.log(totalPlanHours); // Output: 16
            } else {
              console.log('Assignments array is empty or undefined.');
            }
  return (
    <div className="main-section">
       {/* <Header/>
      <Sidebars/> */}

          </div>
  );
};
