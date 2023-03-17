import { Text } from "react-native";
import React from "react";
import { useSafeArea, Box, Container } from "native-base";

const Layout = () => {
  const safeAreaProps = useSafeArea({
    safeAreaTop: true,
    pt: 2,
  });

  return (
    <Box {...safeAreaProps}>
      <Container>
        <Text>Open up App.js to start working on your app!</Text>
        {/* <HomeScreen /> */}
      </Container>
    </Box>
  );
};

export default Layout;
