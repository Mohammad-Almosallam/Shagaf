import React, { useState } from "react";
import { IoPersonOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../auth/authService";
import { toast } from "react-toastify";
import Spline from "@splinetool/react-spline";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Flex,
  Box,
  Heading,
} from "@chakra-ui/react";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;
  const navigate = useNavigate();

  function handleChange(e) {
    setFormData((prevValue) => ({
      ...prevValue,
      [e.target.name]: e.target.value,
    }));
  }

  async function handleOnSubmit(e) {
    e.preventDefault();

    if (password !== password2) {
      toast.error("Passwords do not match");
    } else {
      const userData = {
        name,
        email,
        password,
      };

      const message = await register(userData);

      if (message.status === 400) {
        toast.error(message.data.message);
      } else if (message.status === 201) {
        toast.success("Registered!");
        navigate("/");
      } else {
        toast.error(message.statusText);
      }
    }
  }

  return (
    <Flex width={"100%"} h={"100vh"}>
      <Box bg={"#999"} width={"50%"}>
        <Spline scene="https://prod.spline.design/IW8nMmrQH9b-VJnB/scene.splinecode" />
      </Box>
      <Box w={"50%"} margin={"auto"}>
        <Flex flexDirection={"column"} p={"1"} m={"auto"} w={"400px"} gap={"2"}>
          <Heading display={"flex"} gap={"2"} alignItems={"center"} mb={"2"}>
            <IoPersonOutline /> Register
          </Heading>
          <FormControl>
            <FormLabel mb={"0"}>Name</FormLabel>
            <Input
              type={"text"}
              className="input"
              id="name"
              name="name"
              value={name}
              placeholder="Enter your name"
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </FormControl>
          <FormControl>
            <FormLabel mb={"0"}>Email</FormLabel>
            <Input
              type={"email"}
              className="input"
              id="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </FormControl>
          <FormControl>
            <FormLabel mb={"0"}>Password</FormLabel>
            <Input
              type={"password"}
              className="input"
              id="password"
              name="password"
              value={password}
              placeholder="Enter your password"
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </FormControl>
          <FormControl>
            <FormLabel mb={"0"}>Confirm password</FormLabel>
            <Input
              type={"password"}
              className="input"
              id="password2"
              name="password2"
              value={password2}
              placeholder="Confirm password"
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </FormControl>
          <Button
            type="submit"
            onClick={(e) => {
              handleOnSubmit(e);
            }}
            colorScheme="blackAlpha"
            variant="outline"
            width={"100%"}
            mt={"3"}
          >
            Submit
          </Button>
          <Text>
            have an account?<Link to={"/login"}> login</Link>
          </Text>
        </Flex>
      </Box>
    </Flex>
  );
}

export default Register;
