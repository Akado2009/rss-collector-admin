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

    const columns = [
        {title: "ID", field: 'id'},
        {title: "Sentence ID", field: 'sentence_id'},
        {
            title: "Date Start",
            field: 'date_start',
            render: rowData => <i>{moment(rowData.date_start).format('MMMM Do YYYY, h:mm:ss a')}</i>
        },
        {
          title: "Date End",
          field: 'date_end',
          render: rowData => <i>{moment(rowData.date_start).format('MMMM Do YYYY, h:mm:ss a')}</i>
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