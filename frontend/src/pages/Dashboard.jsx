import React, { useState } from "react";
import { Flex } from "@chakra-ui/react";
import HeroDashboard from "../components/DashboardComponents/HeroDashboard";
import IntroDashboard from "../components/DashboardComponents/IntroDashboard";

function Dashboard() {
  // function handleGoalSubmit(e) {}

  return (
    <Flex h={"100vh"} flexDirection={{ sm: "column", lg: "row" }} w={"100%"}>
      <IntroDashboard />
      <HeroDashboard />
    </Flex>
  );
}

export default Dashboard;
