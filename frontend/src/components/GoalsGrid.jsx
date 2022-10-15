import React, { useEffect, useState } from "react";
import { SimpleGrid, Box, Text } from "@chakra-ui/react";
import Goal from "./Goal";
import { deleteGoal } from "../auth/goalService";
import { toast } from "react-toastify";

function GoalsGrid(props) {
  const arrGoals = props.userGoals;

  async function handleGoalDelete(goalID, e) {
    e.preventDefault();
    const token = JSON.parse(localStorage.getItem("user")).token;

    const message = await deleteGoal(goalID, token);

    if (message.status === 400 || message.status === 401) {
      toast.error(message.data.message);
    } else if (message.status === 200) {
      toast.success("Deleted Successfully");
      props.renderUserGoals();
    } else {
      toast.error(message.statusText);
    }
  }

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
              id={eachGoal._id}
              onDelete={handleGoalDelete}
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
