import React, { useState, useEffect } from "react";

import axios from 'axios';

import {
    Typography,
} from '@material-ui/core';

import { useTheme } from "@material-ui/styles";
import useStyles from "./styles";

import Table from './Components/Table';

export default function Dates(props) {

    var classes = useStyles();
    var theme = useTheme();
    
    const updateReleases = () => {
        axios.get("http://backend:9939/dates/get_all")
        .then(response => {
            setDates(response.data);
        })
        .catch(error => {
            console.error(error);
        })
    }

    const [dates, setDates] = useState([]);
    useEffect(() => {
       updateReleases();
    }, []);

    return (
        <>
            <Typography variant="h1" size="sm">Dates</Typography>
            <br />
            <br />
            <Table data={dates} />
        </>
    );
}