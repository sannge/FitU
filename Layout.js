import React from "react";
import { useSafeArea, Box, Flex } from "native-base";
import RootNavigator from "./navigation";
import { theme } from "./NativeBaseTheme";

const Layout = () => {
  const safeAreaProps = useSafeArea({
    safeAreaTop: true,
    pt: 2,
    pb: 2,
  });

  return (
    <Box
      flex={1}
      {...safeAreaProps}
      // bg={theme.colors.backgroundColor["500"]}
    >
      <RootNavigator />
    </Box>
  );
};

export default Layout;
