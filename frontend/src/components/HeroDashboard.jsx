import React, { useEffect, useState } from "react";
import { Box, Button, Heading } from "@chakra-ui/react";
import StatsBox from "./StatsBox";
// import { useStopwatch } from "react-timer-hook";
import TableStats from "./TableStats";
import GoalsGrid from "./GoalsGrid";

function HeroDashboard(props) {
  const [statsData, setData] = useState({
    goalsNum: 27,
    goalsDone: 15,
    goalsRemain: 12,
  });
  const [isOpen, setOpen] = useState(false);

  return (
    <Box
      pt={{ sm: 0, md: 12 }}
      pr={7}
      pl={7}
      pb={7}
      flex={"70%"}
      overflow={{ md: "unset", lg: "scroll" }}
    >
      <Heading fontWeight={"500"} fontSize={"3xl"}>
        الإحصائيات:
      </Heading>
      <Box
        mt={"4"}
        display={"flex"}
        className={"scrollDisable cardWrapper"}
        flexWrap={"nowrap"}
        overflowX={"auto"}
        flexDirection={"row"}
        alignItems={"stretch"}
        gap={"7"}
        p={8}
        borderRadius="25px"
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
      </Box>

      <Button
        mb={"2"}
        width={"100%"}
        onClick={() => {
          setOpen((isOpen) => !isOpen);
        }}
      >
        اظهر التقرير
      </Button>
      <TableStats isOpen={isOpen} userGoals={props.userGoals} />

      <Box mt={5}>
        <Heading fontWeight={"500"} mb={3} fontSize={"3xl"}>
          الأهداف:
        </Heading>
        {/* Goals Component */}
        <GoalsGrid userGoals={props.userGoals} />
      </Box>
    </Box>
  );
}

export default HeroDashboard;
