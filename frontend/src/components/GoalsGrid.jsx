import React, { useEffect, useState } from "react";
import { SimpleGrid, Box, Text } from "@chakra-ui/react";
import Goal from "./Goal";

function GoalsGrid(props) {
  const arrGoals = props.userGoals;

  return (
    <SimpleGrid
      h={"100%"}
      overflow={"scroll"}
      className={"scrollDisable"}
      columns={{ sm: 1, md: 2, lg: 3 }}
      spacing="20px"
    >
      {arrGoals.length === 0 ? (
        <Text>لا يوجد لديك اهداف</Text>
      ) : (
        arrGoals.map((eachGoal) => {
          return (
            <Goal
              key={eachGoal._id}
              goalText={eachGoal.text}
              createdAt={eachGoal.createdAt}
            ></Goal>
          );
        })
      )}
    </SimpleGrid>
  );
}

export default GoalsGrid;
