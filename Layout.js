import React from "react";
import { useSafeArea, Box, Flex } from "native-base";
import RootNavigator from "./navigation";

const Layout = () => {
  const safeAreaProps = useSafeArea({
    safeAreaTop: true,
    pt: 2,
    pb: 2,
  });

  return (
    <Box flex={1} {...safeAreaProps}>
      <RootNavigator />
    </Box>
  );
};

export default Layout;
