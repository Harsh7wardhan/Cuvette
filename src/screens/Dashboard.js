import React from "react";
import Heading from "../components/Basics/Heading";
import Skeleton from "../components/Basics/Skeleton";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Heading heading="Dashboard" />
      <Skeleton skeleton="Dashboard" />
    </div>
  );
};

export default Dashboard;
