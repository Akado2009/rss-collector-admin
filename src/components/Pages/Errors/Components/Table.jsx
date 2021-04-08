import React, {useState, useEffect} from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import MaterialTable from 'material-table';
import * as moment from 'moment';


// components

const useStyles = makeStyles(theme => ({
    tableOverflow: {
      overflow: 'auto'
    }
}));

export default function Table(props) {
    const classes = useStyles();


    const columns = [
        {title: "Error message", field: 'error_msg'},
        {
            title: "Occurence time",
            field: 'error_date',
            render: rowData => <i>{moment(rowData.error_date).format('MMMM Do YYYY, h:mm:ss a')}</i>
        },
    ];

    return (
      <>
        <Grid container spacing={4}>
          <Grid item xs={12}>
          <MaterialTable
            title="Errors"
            columns={columns}
            data={props.data}
            options={{
                headerStyle: {
                  backgroundColor: '#01579b',
                  color: '#FFF',
                },
                actionsColumnIndex: -1,
              }}
            />
          </Grid>
        </Grid>
      </>
    );
  }