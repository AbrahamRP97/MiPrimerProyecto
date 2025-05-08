import { View, Text, TextInput, KeyboardTypeOptions, StyleSheet } from "react-native";

type Props = {
    label: string;
    value: string;
    type?: 'text' | 'password' | 'email' | 'number';
    onChange: (text: string) => void;
    required: boolean;
}

export default function CustomInput({ label, value, type, onChange, required }: Props) {
    const isRequired = type === 'password';
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
    }
    const error = getError();
    
    return(
        <View>
            <Text>{label}</Text>
            <TextInput
                style={styles.input}
                placeholder={"Escribe aqui"}
                value = {value}
                onChangeText={onChange}
                secureTextEntry={isRequired}
                keyboardType ={keyboardType}
                />

                { <Text>{error} </Text>}
        </View>
    );
}
const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        borderRadius: 5,
    },



})