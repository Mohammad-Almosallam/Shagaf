import React, { useState } from "react";
import { Box, Heading } from "@chakra-ui/react";
import StatsBox from "../StatsBox";

function HeroDashboard() {
  const [statsData, setData] = useState([{}]);
  return (
    <Box p={7} flex={"70%"}>
      <Heading fontWeight={"500"} fontSize={"3xl"}>
        الإحصائيات:
      </Heading>

      <Box
        mt={"4"}
        display={"flex"}
        className={"cardWrapper"}
        flexWrap={"nowrap"}
        overflowX={"auto"}
        flexDirection={"row"}
        alignItems={"stretch"}
        gap={"7"}
        p={8}
      >
        <StatsBox
          icon={"🎯"}
          color="red.100"
          title={"عدد الاهداف"}
          value={"27"}
        />
        <StatsBox
          icon={"✅"}
          color={"green.100"}
          title={"الاهداف المكتمله"}
          value={"15"}
        />
        <StatsBox
          icon={"🚧"}
          color={"orange.100"}
          title={"الاهداف المتبقيه"}
          value={"12"}
        />
        <StatsBox
          icon={"⏰"}
          color={"blue.100"}
          title={"الوقت منذ الدخول"}
          value={"2:23"}
        />
      </Box>

      <Box mt={5} bgColor={"#F8F9FD"}>
        <Heading fontWeight={"500"} fontSize={"3xl"}>
          الأهداف:
        </Heading>
        {/* Goals Component */}
      </Box>
    </Box>
  );
}

export default HeroDashboard;
