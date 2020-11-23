import React from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import Chats from "./components/Chats";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#7e0c2b",
        },
    },
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Chats />
        </ThemeProvider>
    );
}

export default App;
