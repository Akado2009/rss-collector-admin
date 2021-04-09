import React, {useState, useEffect} from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import MaterialTable from 'material-table';
import * as moment from 'moment';

import DeleteDialog from "./DeleteDialog";

import {
    PlayArrow as Working,
    Stop as NotWorking,
} from '@material-ui/icons';


// components

const useStyles = makeStyles(theme => ({
    tableOverflow: {
      overflow: 'auto'
    }
}));

const aliveColor = "#18c800";
const notAliveColor = "#c80000";

export default function Table(props) {
    const classes = useStyles();

    const [open, setOpen] = useState(false);
    const [name, setName] = useState('');
    const handleClose = () => {
        setOpen(false);
    }

    const columns = [
        {title: "ID", field: 'id'},
        {title: "Name", field: 'name'},
        {
            title: "URL", 
            field: 'url',
            // render: rowData => 
        },
        {
            title: "Alive",
            field: 'alive',
            render: rowData => {
                return rowData.alive ? <Working style={{color: aliveColor}} /> : <NotWorking style={{color: notAliveColor}} />
            },
        },
        {
            title: "Creation time",
            field: 'created',
            render: rowData => <i>{moment(rowData.created).format('MMMM Do YYYY, h:mm:ss a')}</i>
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
                actionsColumnIndex: -1,
              }}
            actions={[
                {
                    icon: 'delete',
                    tooltip: 'Delete subscription',
                    onClick: (event, rowData) => {
                        setName(rowData.name);
                        setOpen(true);
                    }
                }
            ]}
            />
            <DeleteDialog open={open} handleClose={handleClose} name={name} onResult={props.onResult} />
          </Grid>
        </Grid>
      </>
    );
  }