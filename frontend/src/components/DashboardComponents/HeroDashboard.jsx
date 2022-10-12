import React, { useEffect, useState } from "react";
import { Box, Button, Heading } from "@chakra-ui/react";
import StatsBox from "../StatsBox";
import { useStopwatch } from "react-timer-hook";
import TableStats from "../TableStats";

function HeroDashboard() {
  const [statsData, setData] = useState({
    goalsNum: 27,
    goalsDone: 15,
    goalsRemain: 12,
  });
  const { seconds, minutes } = useStopwatch({ autoStart: true });
  const [isOpen, setOpen] = useState(false);

  return (
    <Box mt={12} pr={7} flex={"70%"}>
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
        pt={8}
        pb={8}
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
        <StatsBox
          icon={"⏰"}
          color={"blue.100"}
          title={"الوقت منذ الدخول"}
          value={`${minutes}:${seconds}`}
        />
      </Box>
      <TableStats isOpen={isOpen} />
      <Box mt={5}>
        <Heading fontWeight={"500"} fontSize={"3xl"}>
          الأهداف:
        </Heading>
        <Button
          onClick={() => {
            setOpen((isOpen) => !isOpen);
          }}
        >
          اظهر التقرير
        </Button>

        {/* Goals Component */}
      </Box>
    </Box>
  );
}

export default HeroDashboard;
