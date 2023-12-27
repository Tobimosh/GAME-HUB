import React from "react";
import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import useGameQueryStore from "../store/useGenreStore";
import { Link } from "react-router-dom";


// const  setSearchText = useGameQueryStore(s => s.setSearchText)

const NavBar = () => {
  return (
    <HStack padding={"10px"}>
      <Link to="/">
        <Image src={logo} boxSize="60px" objectFit={'cover'} />
      </Link>

      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
