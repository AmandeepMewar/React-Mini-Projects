import useLocalStorage from "./useLocalStorage";
import "./Styles.css";
export default function ThemeSwitch() {
    const [theme, setTheme] = useLocalStorage("theme", "light");

    const handleToggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <div className="theme-switch" data-theme={theme}>
            <h1>Reach heaven through violence</h1>
            <button onClick={handleToggleTheme}>Change theme</button>
        </div>
    );
}
