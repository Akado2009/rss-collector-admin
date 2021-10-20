import React, { useState, useEffect } from "react";

import axios from 'axios';

import {
    Typography,
} from '@material-ui/core';

import { useTheme } from "@material-ui/styles";
import useStyles from "./styles";

import Table from './Components/Table';

export default function Sentences(props) {

    var classes = useStyles();
    var theme = useTheme();
    
    const updateSentences = () => {
        axios.get("http://inclinico-dev.lan:9939/sentences/get_all")
        .then(response => {
            setSents(response.data);
        })
        .catch(error => {
            console.error(error);
        })
    }

    const [sents, setSents] = useState([]);
    useEffect(() => {
       updateSentences();
    }, []);

    return (
        <>
            <Typography variant="h1" size="sm">Sentences</Typography>
            <br />
            <br />
            <Table data={sents} />
        </>
    );
}