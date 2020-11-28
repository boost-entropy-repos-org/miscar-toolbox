import React from "react";
import firebase from "firebase/app";
import "firebase/auth";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createMuiTheme } from "@material-ui/core/styles";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import Chats from "./components/Chats";
import { FirebaseAuthProvider, IfFirebaseAuthed } from "@react-firebase/auth";
import { FIREBASE_CONFIGURATION } from "./constants";
import Navigation from "./components/Navigation";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#7e0c2b",
        },
        secondary: {
            main: "#222222",
        },
        type: "dark",
    },
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <FirebaseAuthProvider firebase={firebase} {...FIREBASE_CONFIGURATION}>
                <Router>
                    <Navigation />
                    <IfFirebaseAuthed>
                        {({ user }) => (
                            <Switch>
                                <Route path="/chats">
                                    <Chats user={user} />
                                </Route>
                            </Switch>
                        )}
                    </IfFirebaseAuthed>
                </Router>
            </FirebaseAuthProvider>
        </ThemeProvider>
    );
}

export default App;
