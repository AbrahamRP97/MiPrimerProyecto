import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthProvider } from './context/AuthContext';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Screens/Home';
import Login from './Screens/Login';
import TabsLayout from './Screens/Tabs/TabsLayout';
import { LanguageProvider } from './context/LanguageContext';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <AuthProvider>
      <LanguageProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Tabs" component={TabsLayout}/>
      </Stack.Navigator>
    </NavigationContainer>
    </LanguageProvider>
    </AuthProvider>
  );
}