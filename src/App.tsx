import React from "react";
import firebase from "firebase/app";
import "firebase/auth";
import { createMuiTheme } from "@material-ui/core/styles";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import Chats from "./components/Chats";
import { FirebaseAuthConsumer, FirebaseAuthProvider } from "@react-firebase/auth";
import { FIREBASE_CONFIGURATION } from "./constants";
import { Button } from "@material-ui/core";

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
                <FirebaseAuthConsumer>
                    {({ isSignedIn, user, providerId }) => {
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
            </FirebaseAuthProvider>
        </ThemeProvider>
    );
}

export default App;
