import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import axios from 'axios';

export default function AddDialog(props) {
    const [name, setName] = useState('');
    const [URL, setURL] = useState('');

    const submitSubscription = () => {
        let data = {
            name,
            url: URL,
        };
        axios.post("http://stage.inclinico.lan/rss/subscriptions/add", data)
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
                    Provide a name and URL for the subscription.
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id={"name"}
                    label={"Name"}
                    fullWidth
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
                <TextField
                    margin="dense"
                    id={"url"}
                    label={"URL"}
                    fullWidth
                    value={URL}
                    onChange={(event) => setURL(event.target.value)}
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