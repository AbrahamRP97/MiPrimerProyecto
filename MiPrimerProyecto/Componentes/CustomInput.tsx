import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { View, Text, TextInput, KeyboardTypeOptions, StyleSheet, TouchableOpacity } from "react-native";

type Props = {
    label: string;
    value: string;
    type?: 'text' | 'password' | 'email' | 'number';
    onChange: (text: string) => void;
    required: boolean;
}

export default function CustomInput({ label, value, type, onChange, required }: Props) {
    const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);
    const [isSecureText, setIsSecureText] = React.useState(type === 'password');

    const isPasswordField = type === 'password';

    const keyboardType: KeyboardTypeOptions =
    /*Flujos de control: operador ternario*/
        type === 'email' ? 'email-address' :
        type === 'number' ? 'numeric' : 'default';
    
    const getError = () => {
        if (required && !value) return 'Este campo es requerido';
        /*evaluar si tiene @*/
        if (type === 'email' && value.includes('@')) return 'El correo electronico no es valido';
        /*evaluar el minimo de caracteres*/
        if (type === 'password' && value.length < 6) return 'La contraseña debe ser mas fuerte';
        return null;
    }
    const error = getError();
    
    return(
        <View style={styles.wrapper}>
            <View style={[styles.inputContainer, error && styles.inputError]}>
            <Text>{label}</Text>
            <TextInput
                style={styles.input}
                placeholder={label}
                value = {value}
                onChangeText={onChange}
                secureTextEntry={isSecureText}
                keyboardType ={keyboardType}
                />
            {isPasswordField && (
                <TouchableOpacity
                    onPress={() => {
                        setIsPasswordVisible(!isPasswordVisible);
                        setIsSecureText(!isPasswordVisible);
                    }}>
                <Ionicons
                    name={isPasswordVisible ? 'eye-off' : 'eye'}
                    size={20}/>
            </TouchableOpacity>)}
            </View>
                { error && <Text>{error} </Text>}
        </View>
    );
}
const styles = StyleSheet.create({
    wrapper: {
        marginBottom: 10},
    input: {
        borderWidth: 1,
        borderColor: '#736d6d',
        padding: 10,
        textAlign: 'center',
        borderRadius: 5,
        width: 250,
    },
    error: {
        color: 'red',
        fontSize: 12,
    },
    inputContainer: {
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'gray',
    },

    inputError: {
        borderColor: 'red',
    },


})