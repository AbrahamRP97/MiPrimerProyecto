import { View } from "react-native";
import CustomInput from "../Componentes/CustomInput";
import { useState } from "react";
export default function Login() {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
    return (
        <View>
            <CustomInput 
                label="Correo electronico"
                type="email"
                value={email} 
                onChange={setEmail}
                required={false} />

            <CustomInput 
                label="Contraseña"
                type="password"
                value={password} 
                onChange={setPassword}
                required={true} />    
        </View>
    );
}