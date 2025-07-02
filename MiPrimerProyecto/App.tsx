import { NavigationContainer, ThemeProvider } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthProvider } from './context/AuthContext';
import Home from './Screens/Home';
import Login from './Screens/Login';
import TabsLayout from './Screens/Tabs/TabsLayout';
import { LanguageProvider } from './context/LanguageContext';
import Profile from './Screens/Tabs/Profile';
import Settings from './Screens/Tabs/Settings';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <AuthProvider>
      <LanguageProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Profile" component={Settings}/>
      </Stack.Navigator>
    </NavigationContainer>
    </LanguageProvider>
    </AuthProvider>
  );
}