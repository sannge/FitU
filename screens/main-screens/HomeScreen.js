import { Text, View } from "react-native";
import React from "react";
import Header from "../../components/reuseable/Header";
import { IconButton, Icon, Flex } from "native-base";
import Ionicons from "react-native-vector-icons/Ionicons";
import { theme } from "../../NativeBaseTheme";
import { useNavigation } from "@react-navigation/native";

const RightComponent = ({ navigation }) => {
  return (
    <Flex direction="row" alignItems="center">
      <IconButton
        onPress={() =>
          navigation.navigate("CoachStack", {
            name: "CoachesScreen",
          })
        }
        borderColor={theme.colors.secondary["500"]}
        // icon={<Icon as={Ionicon} name="chatbubble-ellipses" />}
        borderRadius="full"
        variant="outline"
        _icon={{
          as: Ionicons,
          name: "chatbubble-ellipses",
          size: "md",
          color: "black",
        }}
        _hover={{
          bg: "gray.500:alpha.20",
        }}
        _pressed={{
          bg: "gray.500:alpha.20",
        }}
      />
    </Flex>
  );
};

const HomeScreen = ({}) => {
  const navigation = useNavigation();
  return (
    <View>
      <Header
        headerText="My Routines"
        RightComponent={() => <RightComponent navigation={navigation} />}
      />
    </View>
  );
};

export default HomeScreen;
