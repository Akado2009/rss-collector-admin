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


export default function Errors(props) {

    var classes = useStyles();
    var theme = useTheme();


    const updateErrors = () => {
        axios.get("http://127.0.0.1:9939/errors/get")
        .then(response => {
            setErrs(response.data);
        })
        .catch(error => {
            console.error(error);
        })
    }

    const [errs, setErrs] = useState([]);
    useEffect(() => {
        updateErrors();
    }, []);

    return (
        <>
            <Typography variant="h1" size="sm">Errors</Typography>
            <br />
            <br />
            <Table data={errs} />
        </>
    );
}