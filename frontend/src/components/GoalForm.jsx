import React from "react";
import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { IoChevronBackOutline } from "react-icons/io5";

function GoalForm(props) {
  return (
    <Box>
      <FormControl>
        <FormLabel fontSize={"1.2rem"}>اكتب هدفك🎯 </FormLabel>
        <Input
          type={"text"}
          bgColor={"white"}
          placeholder="ادخل الهدف"
          onChange={(e) => {
            props.change(e.target.value);
          }}
          value={props.goalText}
        />
        <Button
          type="submit"
          onClick={(e) => {
            // handleOnSubmit(e);
          }}
          bg={"black"}
          colorScheme={""}
          color={"white"}
          variant="solid"
          width={"100%"}
          mt={"3"}
          alignItems={"center"}
        >
          سجل هدفك
          <IoChevronBackOutline />
        </Button>
      </FormControl>
    </Box>
  );
}

export default GoalForm;
