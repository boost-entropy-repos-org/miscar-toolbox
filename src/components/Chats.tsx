import React, { useState } from "react";
import axios from "axios";
import { Grid } from "@material-ui/core";
import { FIREBASE_URL } from "../constants";

interface Message {
    from: string;
    sent: string;
    content: string;
    attachment: string;
}

export default function Chats() {
    const [messages, setMessages]: [Message[], Function] = useState([]);

    if (messages.length === 0) {
        axios
            .get(`${FIREBASE_URL}/chats/test`)
            .then((result) => {
                setMessages(result.data);
            })
            .catch((error) => {
                console.error(error);
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
                    <p key={message.sent}>{JSON.stringify(message)}</p>
                ))}
            </Grid>
        </Grid>
    );
}
