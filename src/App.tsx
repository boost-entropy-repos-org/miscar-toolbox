import React from 'react';
import {createMuiTheme} from '@material-ui/core/styles';
import './App.css';
import ThemeProvider from "@material-ui/styles/ThemeProvider";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#7e0c2b'
        }
    }
})

function App() {
    return (
        <ThemeProvider theme={theme}>
            <h1>
                MisCar
            </h1>
        </ThemeProvider>
    );
}

export default App;
