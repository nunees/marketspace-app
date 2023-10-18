import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import {
  Karla_400Regular,
  Karla_700Bold,
  useFonts,
} from "@expo-google-fonts/karla";
import { Loading } from "@components/Loading";
import { SignIn } from "@screens/SignIn";
import { THEME } from "./src/theme";

export default function App() {
  const [fontsLoaded] = useFonts({ Karla_400Regular, Karla_700Bold });

  return (
    <NativeBaseProvider theme={THEME} isSSR={false}>
      <StatusBar style="auto" />
      {fontsLoaded ? <SignIn /> : <Loading />}
    </NativeBaseProvider>
  );
}
