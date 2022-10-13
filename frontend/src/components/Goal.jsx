import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { IoTrashOutline } from "react-icons/io5";
import { useWindowWidth } from "@react-hook/window-size";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

function Goal(props) {
  //This is get current window width to enable aos animation only mobile/ipad view
  const windowWidth = useWindowWidth();

  AOS.init();
  return (
    <Box
      data-aos={windowWidth < 1160 ? "fade-down" : ""}
      className={"glass scrollDisable"}
      overflow={"scroll"}
      p={"1rem"}
      borderRadius={"25px"}
      boxShadow={"0px 0px 60px -15px rgba(0,0,0,0.1)"}
      display={"flex"}
      h={"100px"}
      flexDirection={"column"}
      alignItems={"center"}
      position={"relative"}
      border={"1px black solid"}
      justifyContent={"center"}
    >
      <Box
        position={"absolute"}
        top={0}
        left={0}
        bgColor={"red.400"}
        borderBottomRightRadius={"20px"}
        height={"30px"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        width={"30px"}
      >
        <IoTrashOutline />
      </Box>
      <Text>{props.goalText}</Text>
    </Box>
  );
}

export default Goal;
