import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import {axiosInstance} from "../../config";

const Single = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const id = location.pathname.split("/")[2];
//  const f =  data.map(d => {if(d._id==id)return d});
console.log("path ", path);
  const { data, loading, error } = useFetch(`https://eziladmin.herokuapp.com/api/${path}`);
  console.log("data", data);
 const dat = data.filter(d => d._id==id);
 const firstElt = dat[0];
 console.log("first Element", data);
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://res.cloudinary.com/lamadev/image/upload/v1658091624/upload/ww3ggi3dwakenusejmaz.jpg"
                alt=""
                className="itemImg"
              />
              {/* <div className="details">
                <h1 className="itemTitle">{firstElt.username}</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{firstElt.email}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">{firstElt.phone}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">City:</span>
                  <span className="itemValue">
                    {firstElt.city + `,`+firstElt.country}
                  </span>
                </div>
                <div className="detailI tem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">USA</span>
                </div>
              </div> */}
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">Last Transactions</h1>
          <List/>
        </div>
      </div>
    </div>
  );
};

export default Single;
