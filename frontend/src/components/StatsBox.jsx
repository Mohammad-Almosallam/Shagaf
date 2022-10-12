import React from "react";
import { Box, Text } from "@chakra-ui/react";

function StatsBox(props) {
  return (
    <Box
      width={{ lg: "30%", md: "45%", sm: "95%" }}
      padding={"4"}
      className={"glass"}
      borderRadius={"25px"}
      boxShadow={"0px 0px 60px -15px rgba(0,0,0,0.1)"}
      display={"flex"}
      flexShrink={0}
      alignItems={"center"}
      borderRightColor={props.color}
      borderRightWidth={"6px"}
    >
      <Text
        bgColor={props.color}
        borderRadius={"50%"}
        w={"50px"}
        h={"50px"}
        textAlign={"center"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        fontSize={"3xl"}
      >
        {props.icon}
      </Text>
      <Box pr={"8"} lineHeight={"8"}>
        <Text textColor={"gray.500"} fontWeight={"500"}>
          {props.title}
        </Text>
        <Text fontSize={"3xl"} fontWeight={"800"}>
          {props.value}
        </Text>
      </Box>
    </Box>
  );
}

export default StatsBox;
