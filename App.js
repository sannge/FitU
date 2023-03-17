import { Provider } from "react-redux";
import store from "./redux/store"; // your Redux store
import { NativeBaseProvider } from "native-base";
import Layout from "./Layout";

function App() {
  return (
    <NativeBaseProvider>
      <Provider store={store}>
        <Layout />
      </Provider>
    </NativeBaseProvider>
  );
}
export default App;
