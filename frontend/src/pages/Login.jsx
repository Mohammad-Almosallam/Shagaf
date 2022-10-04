import React, { useState } from "react";
import { IoLogInOutline, IoChevronBackOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../auth/authService";
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

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;
  const navigate = useNavigate();

  function handleChange(e) {
    setFormData((prevValue) => ({
      ...prevValue,
      [e.target.name]: e.target.value,
    }));
  }

  async function handleOnSubmit(e) {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    const message = await login(userData);

    if (message.status === 400) {
      toast.error(message.data.message);
    } else if (message.status === 200) {
      toast.success("Registered!");
      navigate("/");
    } else {
      toast.error(message.statusText);
    }
  }

  return (
    <Flex width={"100%"} h={"100vh"}>
      <Box bg={"#F1ECE3"} width={"50%"}>
        <Spline scene="https://prod.spline.design/IW8nMmrQH9b-VJnB/scene.splinecode" />
      </Box>
      <Box w={"50%"} margin={"auto"}>
        <Flex flexDirection={"column"} p={"1"} m={"auto"} w={"400px"} gap={"2"}>
          <Heading display={"flex"} gap={"2"} alignItems={"center"} mb={"2"}>
            <IoLogInOutline /> تسجيل الدخول
          </Heading>
          <Text mb={"8"} fontWeight={"300"} fontSize={"2xl"}>
            سجل لتحدد اهدافك 🎯
          </Text>
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
          <Button
            type="submit"
            onClick={(e) => {
              handleOnSubmit(e);
            }}
            bg={"black"}
            borderRadius={"0"}
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
            لديك حساب؟<Link to={"/register"}> سجل دخولك </Link>
          </Text>
        </Flex>
      </Box>
    </Flex>
    // <div className="registerFormContainer">
    //   <div className="formHeading">
    //     <h1>
    //       <IoLogInOutline /> Login
    //     </h1>
    //     <h4>Please Log in to set goals 🎯 </h4>
    //   </div>
    //   <div className="formContainer">
    //     <form
    //       onSubmit={(e) => {
    //         handleOnSubmit(e);
    //       }}
    //     >
    //       <div className="form-group">
    //         <label>Email</label>
    //         <input
    //           type={"email"}
    //           className="input"
    //           id="email"
    //           name="email"
    //           value={email}
    //           placeholder="Enter your email"
    //           onChange={(e) => {
    //             handleChange(e);
    //           }}
    //         />
    //       </div>
    //       <div className="form-group">
    //         <label>Password</label>
    //         <input
    //           type={"password"}
    //           className="input"
    //           id="password"
    //           name="password"
    //           value={password}
    //           placeholder="Enter your password"
    //           onChange={(e) => {
    //             handleChange(e);
    //           }}
    //         />
    //       </div>

    //       <div>
    //         <button type="submit" className="input submitBtn">
    //           Submit
    //         </button>
    //       </div>
    //       <div>
    //         <p>
    //           Don't have an account?
    //           <Link to={"/register"}>register</Link>
    //         </p>
    //       </div>
    //     </form>
    //   </div>
    // </div>
  );
}

export default Login;
