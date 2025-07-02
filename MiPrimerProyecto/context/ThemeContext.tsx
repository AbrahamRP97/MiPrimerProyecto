import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { use, useEffect } from "react";
import { createContext } from "react";
import { useColorScheme } from "react-native";

type Theme = "light" | "dark";

interface ThemeContextProps {
    theme: Theme;
    changeTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | null>(null);

const useTheme = () => {
    const context = React.useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
}

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = React.useState<Theme>("dark");

    useEffect(() => {
        const loadTheme = async () => {
            const storedTheme = await AsyncStorage.getItem("theme");
            if (storedTheme === "light" || storedTheme === "dark") {
                setTheme(storedTheme);
            } else {
                const systemTheme = useColorScheme();
                setTheme(systemTheme === "dark" ? "dark" : "light");
                
            }
        };
        loadTheme();
    }, []);

    const changeTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        AsyncStorage.setItem("theme", theme)
    };

    return (
        <ThemeContext.Provider value={{ theme, changeTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export {useTheme};