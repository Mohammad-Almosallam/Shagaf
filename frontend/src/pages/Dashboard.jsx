import React, { useEffect, useState } from "react";
import { Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import HeroDashboard from "../components/HeroDashboard";
import IntroDashboard from "../components/IntroDashboard";
import { getGoals } from "../auth/goalService";

function Dashboard() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const [userGoals, setUserGoals] = useState("");

  /* It's checking if the user is authenticated. If not, it redirects to the login page. */
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
    console.log("User");
  }, [user, navigate]);

  /* It's rendering the user goals only once at the beginning. */
  useEffect(() => {
    renderUserGoals();
  }, []);

  /**
   * A function that is called when the page loads. It calls the getGoals function and sets the userGoals
   * state to the goals.data.
   */
  async function renderUserGoals() {
    if (user) {
      const token = JSON.parse(localStorage.getItem("user")).token;
      const goals = await getGoals(token);
      console.log(goals);
      setUserGoals(goals.data);
    }
  }

  return (
    <Flex
      h={"100vh"}
      bgColor={"#fcfcfc"}
      flexDirection={{ sm: "column", lg: "row" }}
      w={"100%"}
      className={"scrollDisable"}
    >
      <IntroDashboard
        userName={user && user.name}
        renderUserGoals={renderUserGoals}
      />
      <HeroDashboard userGoals={userGoals} />
    </Flex>
  );
}

export default Dashboard;
