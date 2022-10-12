import React, { useState } from "react";
import { Box, Button, Flex, Heading, Link } from "@chakra-ui/react";
import { IoChevronBackOutline } from "react-icons/io5";
import Emoji from "../Emoji";
import GoalForm from "../GoalForm";
import Goal from "../Goal";

function IntroDashboard() {
  const [goalText, setGoalText] = useState("");

  function handleGoalInputChange(e) {
    setGoalText(e);
  }

  function handleExitBtn() {
    return;
  }

  return (
    <Box
      padding={"8"}
      display="flex"
      m={8}
      flexDir={"column"}
      className={"glass"}
      borderRadius={"25px"}
      boxShadow={"0px 0px 60px -14px rgba(0,0,0,0.1)"}
      flex={"30%"}
    >
      <Flex justifyContent={"space-between"} alignItems={"center"}>
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

      <Flex mb={"2rem"} flexGrow={"1"}>
        <Heading
          mt={"10rem"}
          gap={"3"}
          display={"flex"}
          flexWrap={"wrap"}
          fontSize={"5xl"}
        >
          أهلاً محمد
          <Emoji />
        </Heading>
      </Flex>

      <Box flexGrow={"8"} w={"100%"}>
        <GoalForm change={handleGoalInputChange} goalText={goalText} />
      </Box>

      <Goal goalText={goalText} />
    </Box>
  );
}

export default IntroDashboard;
