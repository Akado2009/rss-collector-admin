import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import axios from 'axios';

const useStyles = makeStyles({
});

export default function DeleteDialog(props) {
    const classes = useStyles();

    const deleteSubscription = () => {
        axios.get(`/rss/subscriptions/delete/${props.name}`)
        .then(response => {
            console.log(response);
            props.onResult("success", "Successfully has been deleted.");
            props.handleClose();
        })
        .catch(err => {
            console.error(err);
            props.onResult("error", err.message);
        })
    }
    return (
        <Dialog
            open={props.open}
            onClose={props.handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">{`Are you want to delete "${props.name}"`}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    If you delete it, you won't be able to restore it after.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={props.handleClose} color="secondary">
                    Cancel
                </Button>
                <Button onClick={deleteSubscription} color="primary" autoFocus>
                    Delete
                </Button>
            </DialogActions>
        </Dialog>
    )
}
