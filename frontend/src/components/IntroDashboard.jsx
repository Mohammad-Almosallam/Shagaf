import React, { useState, useEffect } from "react";
import { Box, Button, Flex, Heading, Link, Text } from "@chakra-ui/react";
import { IoChevronBackOutline } from "react-icons/io5";
import Emoji from "./Emoji";
import GoalForm from "./GoalForm";
import Goal from "./Goal";
import { logout } from "../auth/authService";
import { useNavigate } from "react-router-dom";
import { getGoals } from "../auth/goalService";

function IntroDashboard(props) {
  const [goalText, setGoalText] = useState("");

  const navigate = useNavigate();

  function handleGoalInputChange(e) {
    setGoalText(e);
  }

  function handleExitBtn() {
    logout();
    navigate("/login");
  }

  return (
    <Box
      padding={"8"}
      display="flex"
      m={8}
      flexDir={"column"}
      className={"glass scrollDisable"}
      borderRadius={"25px"}
      boxShadow={"0px 0px 60px -14px rgba(0,0,0,0.1)"}
      flex={"30%"}
    >
      <Flex justifyContent={"space-between"} mb={"2rem"} alignItems={"center"}>
        <Link href="/" fontSize={"xl"} fontWeight={"500"}>
          شَـغَـفْ
        </Link>
        <Button
          type="submit"
          onClick={(e) => {
            handleExitBtn(e);
          }}
          color={"red"}
          colorScheme={"red"}
          variant="outline"
          alignItems={"center"}
        >
          تسجيل الخروج
          <IoChevronBackOutline />
        </Button>
      </Flex>

      <Flex mb={"3rem"} mt={"auto"}>
        <Heading
          mt={"2rem"}
          gap={"3"}
          display={"flex"}
          flexWrap={"wrap"}
          fontSize={"5xl"}
        >
          أهلاً {props.userName}
          <Emoji />
        </Heading>
      </Flex>

      <Box mb={"auto"} w={"100%"}>
        <GoalForm
          renderUserGoals={props.renderUserGoals}
          change={handleGoalInputChange}
          goalText={goalText}
        />
      </Box>
      <Box mt={"1rem"}>
        <Text mb={"0.8rem"}>هكذا سيعرض هدفك:</Text>
        <Goal goalText={goalText} />
      </Box>
    </Box>
  );
}

export default IntroDashboard;
