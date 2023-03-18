import { Provider } from "react-redux";
import store from "./redux/store"; // your Redux store
import { NativeBaseProvider, extendTheme } from "native-base";
import Layout from "./Layout";
import { NavigationContainer } from "@react-navigation/native";
import { theme } from "./NativeBaseTheme";

function App() {
  return (
    <NavigationContainer theme={theme}>
      <NativeBaseProvider>
        <Provider store={store}>
          <Layout />
        </Provider>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
export default App;
