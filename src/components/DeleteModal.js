import React from 'react';
import { Button, Modal } from '@themesberg/react-bootstrap';

import axios from 'axios';


const DeleteModal = (props) => {
    const onDelete = () => {
        axios.get(`http://127.0.0.1:9939/delete/${props.data.name}`)
        .then(function (response) {
            // handle success
            console.log(response);
            props.onAction();
            props.handleClose();
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
    }
    return (
        <Modal as={Modal.Dialog} centered show={props.show} onHide={props.handleClose}>
            <Modal.Header>
                <Modal.Title className="h6">Are you sure want to {props.action} <i>{props.data.name}</i>?</Modal.Title>
                <Button variant="close" aria-label="Close" onClick={props.handleClose} />
            </Modal.Header>
            <Modal.Footer>
                <Button variant="secondary" onClick={onDelete}>
                    Yes
                </Button>
                <Button className="text-gray ms-auto" onClick={props.handleClose}>
                    No
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default DeleteModal;
