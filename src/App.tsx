import React from "react";
import firebase from "firebase/app";
import "firebase/auth";
import { BrowserRouter as Router } from "react-router-dom";
import { createMuiTheme } from "@material-ui/core/styles";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import Chats from "./components/Chats";
import { FirebaseAuthConsumer, FirebaseAuthProvider } from "@react-firebase/auth";
import { FIREBASE_CONFIGURATION } from "./constants";
import Navigation from "./components/Navigation";

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
            <FirebaseAuthProvider firebase={firebase} {...FIREBASE_CONFIGURATION}>
                <Router>
                    <Navigation />
                    <Chats />
                </Router>
            </FirebaseAuthProvider>
        </ThemeProvider>
    );
}

export default App;
