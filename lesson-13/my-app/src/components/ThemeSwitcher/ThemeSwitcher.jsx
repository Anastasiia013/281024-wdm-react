import useTheme from "../../hooks/useTheme";

import items from "./items";

const ThemeSwitcher = ()=> {
    const {theme, toggleTheme} = useTheme();

    // const transformItems = theme === "light" ? items : [...items].reverse();

    const elements = items.map(item => <option key={item.value} value={item.value}>{item.text}</option>)

    return (
        <select defaultValue={theme} onChange={toggleTheme} name="theme-switcher">
            {elements}
        </select>
    )
}

export default ThemeSwitcher;