import { Text, Flex, Heading } from "native-base";

import React from "react";

const Header = ({ headerText, RightComponent }) => {
  return (
    <Flex
      bg="white"
      px={6}
      pt={4}
      pb={2}
      direction="row"
      justifyContent="space-between">
      <Heading>{headerText}</Heading>
      {RightComponent !== undefined ? <RightComponent /> : <></>}
    </Flex>
  );
};

export default Header;
