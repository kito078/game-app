import { HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import ColorModeSwitch from "./ColorModeSwitch";

function NavBar() {
  return (
    <HStack justifyContent="space-between" padding="20px">
      {/* <Image src={} boxSize='60px/> */}
      <h3>logo</h3>
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
