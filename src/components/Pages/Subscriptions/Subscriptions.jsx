import React, { useState, useEffect } from "react";

import axios from 'axios';

import {
    Grid,
    Typography,
    Button,
} from '@material-ui/core';

import { useTheme } from "@material-ui/styles";
import useStyles from "./styles";

import Table from './Components/Table';
import AddDialog from './Components/AddDialog';
import AddBatchDialog from './Components/AddBatchDialog';
import Notification from './Components/Notification';

export default function Subscriptions(props) {

    var classes = useStyles();
    var theme = useTheme();
    const [open, setOpen] = useState(false);
    const [batchOpen, setBatchOpen] = useState(false);
    
    const handleClose = () => {
        setOpen(false);
        setBatchOpen(false);
    }

    const [notifOpen, setNotifOpen] = useState(false);
    const handleNotifClose = () => {
        setNotifOpen(false);
    }
    const [severity, setSeverity] = useState("");
    const [message, setMessage] = useState("");

    const handleResult = (sev, msg) => {
        setSeverity(sev);
        setMessage(msg);
        setNotifOpen(true);
        updateSubs();
    }

    const updateSubs = () => {
        axios.get("http://stage.inclinico.lan/rss/subscriptions/get_all")
        .then(response => {
            console.log(response);
            setSubs(response.data);
        })
        .catch(error => {
            console.error(error);
        })
    }

    const [subs, setSubs] = useState([]);
    useEffect(() => {
       updateSubs();
    }, []);

    return (
        <>
            <Typography variant="h1" size="sm">Subscriptions</Typography>
            <Button variant="outlined" color="primary" onClick={() => setOpen(true)}>
                Add a subscription
            </Button>
            <Button variant="outlined" color="primary" onClick={() => setBatchOpen(true)}>
                Add multiple subscriptions
            </Button>
            <br />
            <br />
            <Table data={subs} onResult={handleResult} />
            
            <AddDialog open={open} handleClose={handleClose} onResult={handleResult} />
            <AddBatchDialog open={batchOpen} handleClose={handleClose} onResult={handleResult} />

            <Notification open={notifOpen} handleClose={handleNotifClose} severity={severity} message={message} />
        </>
    );
}