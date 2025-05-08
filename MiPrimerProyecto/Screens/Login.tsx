import { View } from "react-native";
import CustomInput from "../Componentes/CustomInput";
import { useState } from "react";
export default function Login() {
const [email, setEmail] = useState('abraham@unitec.edu');

    return (
        <View>
            <CustomInput 
                label={"Input de prueba"}
                value={"Abraham"} 
                onChange={()=>{}}
                required={false} />
        </View>
    );
}