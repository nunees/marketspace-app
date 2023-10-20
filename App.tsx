import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import {
  Karla_400Regular,
  Karla_700Bold,
  useFonts,
} from "@expo-google-fonts/karla";
import { Loading } from "@components/Loading";

import { THEME } from "./src/theme";
import { SignUp } from "@screens/SignUp";
import { Routes } from "@routes/index";

export default function App() {
  const [fontsLoaded] = useFonts({ Karla_400Regular, Karla_700Bold });

  return (
    <NativeBaseProvider theme={THEME} isSSR={false}>
      <StatusBar style="auto" />
      {fontsLoaded ? <Routes /> : <Loading />}
    </NativeBaseProvider>
  );
}
