import React from "react";
import firebase from "firebase/app";
import "firebase/auth";
import { BrowserRouter as Router } from "react-router-dom";
import { createMuiTheme } from "@material-ui/core/styles";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import Chats from "./components/Chats";
import { FirebaseAuthConsumer, FirebaseAuthProvider } from "@react-firebase/auth";
import { FIREBASE_CONFIGURATION } from "./constants";
import { Button } from "@material-ui/core";
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
                    <FirebaseAuthConsumer>
                        {({ isSignedIn, user }) => {
                            if (isSignedIn)
                                return (
                                    <div>
                                        <p>{JSON.stringify(user)}</p>
                                        <Button
                                            onClick={() => {
                                                firebase.auth().signOut();
                                            }}
                                            color="primary"
                                            variant="contained"
                                        >
                                            Sign Out
                                        </Button>
                                    </div>
                                );
                            return (
                                <Button
                                    onClick={() => {
                                        const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
                                        firebase.auth().signInWithPopup(googleAuthProvider);
                                    }}
                                    color="primary"
                                    variant="contained"
                                >
                                    Sign in
                                </Button>
                            );
                        }}
                    </FirebaseAuthConsumer>
                    <Chats />
                </Router>
            </FirebaseAuthProvider>
        </ThemeProvider>
    );
}

export default App;
