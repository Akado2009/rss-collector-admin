import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import MaterialTable from 'material-table';

const useStyles = makeStyles(theme => ({
    tableOverflow: {
      overflow: 'auto'
    }
}));

export default function Table(props) {

    console.log(props.data);
    const classes = useStyles();

    const columns = [
        {title: "ID", field: 'id'},
        {title: "Press ID", field: 'press_id'},
        {title: "Sentence", field: 'sentence'}
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