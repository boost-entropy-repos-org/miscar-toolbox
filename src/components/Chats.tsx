import React from "react";
import { Grid } from "@material-ui/core";

export default function Chats() {
    return (
        <Grid container spacing={3}>
            <Grid item xs={3}>
                <h1>Chats</h1>
            </Grid>
            <Grid item xs={9}>
                <h1>Messages</h1>
            </Grid>
        </Grid>
    );
}
