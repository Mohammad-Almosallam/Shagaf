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
            <Tr>
              <Td>اصنع المحبه</Td>
              <Td>2019</Td>
              <Td isNumeric>14:24</Td>
            </Tr>
            <Tr>
              <Td>feet</Td>
              <Td>centimetres (cm)</Td>
              <Td isNumeric>30.48</Td>
            </Tr>
            <Tr>
              <Td>yards</Td>
              <Td>metres (m)</Td>
              <Td isNumeric>0.91444</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Collapse>
  );
}

export default TableStats;
