import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import axios from 'axios';

export default function AddBatchDialog(props) {
    const [data, setData] = useState('');

    const submitSubscription = () => {
        let _data  = {"data": data}
        axios.post("http://stage.inclinico.lan/rss/subscriptions/add_batch", _data)
        .then(response => {
            console.log(response)
            if (response.status == 200) {
                props.onResult("success", "Subscription has been added.");
                props.handleClose()
            } else if (response.status == 208) {

            } else {
                props.onResult("error", "Whoops... something went wrong");
            }
        })
        .catch(err => {
            console.error(err)
            props.onResult("errro", err.message);
        })
    }
    return (
        <Dialog open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Provide a comma separate table of subscriptions. Should be in form of <strong>Name</strong>, <strong>URL</strong> without any type of header.
                </DialogContentText>
                <TextField
                    margin="dense"
                    id={"data"}
                    label={"DATA"}
                    fullWidth
                    multiline
                    rows={10}
                    value={data}
                    onChange={(event) => setData(event.target.value)}
                />
            </DialogContent>
            <DialogActions>
            <Button onClick={props.handleClose} color="secondary">
                Cancel
            </Button>
            <Button onClick={submitSubscription} color="primary">
                Submit
            </Button>
            </DialogActions>
        </Dialog>
    )
}