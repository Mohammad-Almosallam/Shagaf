import React, { useState } from "react";
import { IoPersonOutline, IoChevronBackOutline } from "react-icons/io5";
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
    <Flex width={"100%"} h={"100vh"} flexDir={"row-reverse"}>
      <Box bg={"#FEF5ED"} width={"50%"}>
        <Spline scene="https://prod.spline.design/IW8nMmrQH9b-VJnB/scene.splinecode" />
      </Box>
      <Box w={"50%"} margin={"auto"}>
        <Flex flexDirection={"column"} p={"1"} m={"auto"} w={"400px"} gap={"2"}>
          <Heading display={"flex"} gap={"2"} alignItems={"center"} mb={"5"}>
            <IoPersonOutline /> تسجيل حساب جديد
          </Heading>
          <FormControl>
            <FormLabel>الاسم</FormLabel>
            <Input
              type={"text"}
              className="input"
              id="name"
              name="name"
              value={name}
              placeholder="ادخل الاسم"
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </FormControl>
          <FormControl>
            <FormLabel>البريد الالكتروني</FormLabel>
            <Input
              type={"email"}
              className="input"
              id="email"
              name="email"
              value={email}
              placeholder="ادخل البريد الالكتروني"
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </FormControl>
          <FormControl>
            <FormLabel>كلمة المرور</FormLabel>
            <Input
              type={"password"}
              className="input"
              id="password"
              name="password"
              value={password}
              placeholder="ادخل كلمة المرور"
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </FormControl>
          <FormControl>
            <FormLabel>تأكيد كلمة المرور</FormLabel>
            <Input
              type={"password"}
              className="input"
              id="password2"
              name="password2"
              value={password2}
              placeholder="أعد إدخال كلمة المرور"
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
            bg={"black"}
            colorScheme={""}
            color={"white"}
            variant="solid"
            width={"100%"}
            mt={"3"}
            alignItems={"center"}
          >
            الدخول
            <IoChevronBackOutline />
          </Button>
          <Text>
            لديك حساب؟<Link to={"/login"}> سجل دخولك </Link>
          </Text>
        </Flex>
      </Box>
    </Flex>
  );
}

export default Register;
