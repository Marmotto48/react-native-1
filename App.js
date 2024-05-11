import { NavigationContainer } from "@react-navigation/native";
// import { AppNavigator } from "./navigation";
import RootNavigation from "./navigation";

export default function App() {
  return (  
    <>
      {/* <NavigationContainer>
        <AppNavigator />
      </NavigationContainer> */}
      <RootNavigation />
    </>
  );
}
