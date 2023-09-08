import React from "react";
import { HStack } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent={'space-between'} padding={'10px'}>
      <img src={logo} className="w-20" alt="" />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
