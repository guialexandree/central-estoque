import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { PaperProvider, MD3LightTheme as DefaultTheme } from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    divider: 'rgba(0, 0, 0, 0.12)',
    primary: '#3f51b5',
    primaryLight: 'rgb(101, 115, 195)',
    primaryDark: 'rgb(44, 56, 126)',
    primaryContrastText: '#fff',
    secondary: '#f50057',
    secondaryLight: 'rgb(247, 51, 120)',
    secondaryDark: 'rgb(171, 0, 60)',
    secondaryContrastText: '#fff',
    error: '#f44336',
    errorLight: '#e57373',
    errorDark: '#d32f2f',
    errorContrastText: '#fff',
    success: '#4caf50',
    successLight: '#81c784',
    successDark: '#388e3c',
    successContrastText: 'rgba(0, 0, 0, 0.87)',
    info: '#2196f3',
    infoLight: '#64b5f6',
    infoDark: '#1976d2',
    infoContrastText: '#fff',
    warning: '#ff9800',
    warningLight: '#ffb74d',
    warningDark: '#f57c00',
    warningContrastText: 'rgba(0, 0, 0, 0.87)',
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
