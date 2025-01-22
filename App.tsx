import { Home } from "@screens/home";
import theme from "./src/theme";
import { ThemeProvider } from "styled-components";
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'
import { Loaded } from "@components/loaded";
import { StatusBar } from "react-native";

export function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  })

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Home /> : <Loaded />}
    </ThemeProvider>
  )
}