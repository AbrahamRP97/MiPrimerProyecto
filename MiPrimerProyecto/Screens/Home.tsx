import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomButton from '../Componentes/CustomButton';

export default function Home({ navigation, route }: any) {
  const { email } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido, {email}</Text>
      <CustomButton
      title="Ir a Tabs"
        onPress={() => {
        navigation.navigate('Tabs', {email});
        }}        
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, 
    justifyContent: 'flex-start', 
    alignItems: 'center', 
    paddingTop: 20 },
  title: { fontSize: 20, marginBottom: 20 },
});