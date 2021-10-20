import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import MaterialTable from 'material-table';
import * as moment from 'moment';


const useStyles = makeStyles(theme => ({
    tableOverflow: {
      overflow: 'auto'
    }
}));

export default function Table(props) {
    const classes = useStyles();
    const columns = [
        {title: "ID", field: 'id'},
        {title: "Subscriptiod ID", field: 'subscription_id'},
        {title: "Subscriptiod Name", field: 'subscription_name'},
        {title: "Content", field: 'content'},
        {
            title: "Date",
            field: 'date',
            render: rowData => <i>{moment(rowData.date).format('MMMM Do YYYY, h:mm:ss a')}</i>
        },
    ];

    return (
      <>
        <Grid container spacing={4}>
          <Grid item xs={12}>
          <MaterialTable
            title="Subscriptions"
            columns={columns}
            data={props.data}
            options={{
                headerStyle: {
                  backgroundColor: '#01579b',
                  color: '#FFF'
                },
              }}
            />
          </Grid>
        </Grid>
      </>
    );
  }