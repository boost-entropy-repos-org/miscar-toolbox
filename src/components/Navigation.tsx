import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import "./Navigation.scss";
import { IconButton } from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";

export default function Navigation() {
    return (
        <div className="nav">
            <AppBar>
                <Toolbar>
                    <Typography variant="h6">MisCar Toolbox</Typography>
                    <Button
                        component={Link}
                        to="/chats"
                        className="nav-button"
                        color="secondary"
                        variant="contained"
                    >
                        Chats
                    </Button>
                    <Button
                        component={Link}
                        to="/tasks"
                        className="nav-button"
                        color="secondary"
                        variant="contained"
                        disabled
                    >
                        Tasks
                    </Button>
                    <Button
                        component={Link}
                        to="/meetings"
                        className="nav-button"
                        color="secondary"
                        variant="contained"
                        disabled
                    >
                        Meetings
                    </Button>
                    <Button
                        component={Link}
                        to="/wiki"
                        className="nav-button"
                        color="secondary"
                        variant="contained"
                        disabled
                    >
                        Wiki
                    </Button>
                    <div className="nav-right">
                        <IconButton>
                            <AccountCircle />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}
