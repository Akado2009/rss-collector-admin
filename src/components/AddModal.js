import React from 'react';
import { Button, Modal, Form} from '@themesberg/react-bootstrap';

import axios from 'axios';

const AddModal = (props) => {

    const [name, setName] = React.useState("");
    const [url, setURL] = React.useState("");

    const onAdd = () => {
        axios.get(`http://127.0.0.1:9939/add/${name}/${url}`)
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
                <Modal.Title className="h6">Add a subscriptiton</Modal.Title>
                <Button variant="close" aria-label="Close" onClick={props.handleClose} />
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Subscription name</Form.Label>
                        <Form.Control 
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Subscription URL</Form.Label>
                        <Form.Control 
                            value={url}
                            onChange={(event) => setURL(event.target.value)}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onAdd}>
                    Add
                </Button>
                <Button variant="link" className="text-gray ms-auto" onClick={props.handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default AddModal;
