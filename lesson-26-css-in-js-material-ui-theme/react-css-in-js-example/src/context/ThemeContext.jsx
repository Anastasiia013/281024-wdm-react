import { ThemeProvider } from "@emotion/react";

const lightTheme = {
    colors: {
        background: "#fff",
        text: "#000"
    }
};

const darkTheme = {
    colors: {
        background: "#000",
        text: "#fff"
    }
}

const Theme = ({children}) => {
    return (
        <ThemeProvider theme={lightTheme}>
            {children}
        </ThemeProvider>
    )
}

export default Theme;