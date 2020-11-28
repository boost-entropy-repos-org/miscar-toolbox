import React from "react";
import { Message } from "../Chats";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import "./Message.scss";

export default function MessageComponent(props: { message: Message }) {
    return (
        <Card>
            <CardContent>
                <Typography variant="h6">{props.message.from}</Typography>
                <Typography variant="body2" component="p">
                    {props.message.content}
                </Typography>
            </CardContent>
        </Card>
    );
}
