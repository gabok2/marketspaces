import { useFonts, Karla_400Regular, Karla_700Bold } from "@expo-google-fonts/karla";
import { ThemeProvider } from "styled-components";
import { Routes } from '@routes/index';
import { Loading } from '@components/Loading';
import theme from "./src/theme";
import { SafeAreaView } from "react-native-safe-area-context";


export default function App() {

  const [fontsLoaded] = useFonts({
    Karla_400Regular,
    Karla_700Bold
  });

  return (
    <SafeAreaView
      edges={['top']}
    style={{
      flex: 1,
      backgroundColor: theme.COLORS.GRAY_600,
    }}>
      <ThemeProvider theme={theme}>
        {fontsLoaded ? <Routes /> : <Loading />}

      </ThemeProvider>
    </SafeAreaView>
  );
}
