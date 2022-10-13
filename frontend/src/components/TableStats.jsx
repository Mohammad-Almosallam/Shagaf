import React, { useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Collapse,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";

function TableStats(props) {
  const arrGoals = props.userGoals;

  return (
    <Collapse in={props.isOpen} animateOpacity>
      <TableContainer
        borderRadius={"25px"}
        boxShadow={"0px 0px 60px -14px rgba(0,0,0,0.1)"}
        className="glass"
        bgColor={"white"}
        maxWidth={"100vw"}
      >
        <Table variant="simple" maxWidth={"100vw"}>
          <Thead>
            <Tr>
              <Th>الهدف</Th>
              <Th>تاريخ التسجيل</Th>
              <Th isNumeric>وقت التسجيل</Th>
            </Tr>
          </Thead>
          <Tbody>
            {arrGoals.length > 0 &&
              arrGoals.map((eachGoal) => {
                return (
                  <Tr key={eachGoal._id}>
                    <Td>{eachGoal.text}</Td>
                    <Td>{eachGoal.createdAt.substring(0, 10)}</Td>
                    <Td isNumeric>{eachGoal.createdAt.substring(11, 16)}</Td>
                  </Tr>
                );
              })}
          </Tbody>
        </Table>
      </TableContainer>
    </Collapse>
  );
}

export default TableStats;
