import { View, Text } from "react-native";
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import { useLanguage } from "../../context/LanguageContext";
import { Button } from "react-native-elements";
import { i18n } from "../../context/LanguageContext";

const { changeLanguage } = useLanguage();

export default function Settings () {

    return (
            <View>
                <Text>
                Bienvenido a Settings
                </Text>
                <Button title="EN" onPress={() => changeLanguage('en')} />
                <Button title="ES" onPress={() => changeLanguage('es')}/>
            </View>
        )
}