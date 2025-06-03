import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Settings from './Settings';
import Profile from './Profile';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

type ProfileProps = {
  email: string;
  name: string;
};

type TabParamList = {
  Settings: undefined;
  Profile: { email: string; name: string };
};

const Tab = createBottomTabNavigator<TabParamList>();

export default function TabsLayout({ route }: BottomTabScreenProps<TabParamList, 'Profile'>) {
  const { email } = route.params;

  return (
    <Tab.Navigator>
      <Tab.Screen name="Settings" component={Settings} />
      <Tab.Screen
        name="Profile"
        component={(props: BottomTabScreenProps<TabParamList, 'Profile'>) => (
          <Profile {...props} email={email} name="Usuario" />
        )}
      />
    </Tab.Navigator>
  );
}