import React, { useState } from "react";
import axios from "axios";
import { Grid } from "@material-ui/core";
import { FIREBASE_URL } from "../constants";
import { withToken } from "../utilities/firebase";
import MessageComponent from "./chats/Message";

export interface Message {
    from: string;
    sent: string;
    content: string;
    attachment: string;
}

const Chats = (props: { user: any }) => {
    const [messages, setMessages]: [Message[], Function] = useState([]);

    if (messages.length === 0) {
        withToken(props.user).then((token) => {
            axios
                .get(`${FIREBASE_URL}/chats/test`, { headers: { authorization: token } })
                .then((result) => {
                    setMessages(result.data);
                })
                .catch((error) => {
                    console.error(error);
                });
        });
    }

    return (
        <Grid container spacing={3}>
            <Grid item xs={3}>
                <h1>Chats</h1>
            </Grid>
            <Grid item xs={9}>
                <h1>Messages</h1>
                {messages.map((message) => (
                    <MessageComponent key={message.sent} message={message} />
                ))}
            </Grid>
        </Grid>
    );
};

export default Chats;
