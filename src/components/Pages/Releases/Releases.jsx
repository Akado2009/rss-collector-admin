import React, { useState, useEffect } from "react";

import axios from 'axios';

import {
    Typography,
} from '@material-ui/core';

import { useTheme } from "@material-ui/styles";
import useStyles from "./styles";

import Table from './Components/Table';

export default function Releases(props) {

    var classes = useStyles();
    var theme = useTheme();
    
    const updateReleases = () => {
        axios.get("http://backend:9939/press/get_all")
        .then(response => {
            setPRs(response.data);
        })
        .catch(error => {
            console.error(error);
        })
    }

    const [prs, setPRs] = useState([]);
    useEffect(() => {
       updateReleases();
    }, []);

    return (
        <>
            <Typography variant="h1" size="sm">Press Releases</Typography>
            <br />
            <br />
            <Table data={prs} />
        </>
    );
}