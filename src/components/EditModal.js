import React from 'react';
import { Button, Badge, Modal, Form, Row, Col } from '@themesberg/react-bootstrap';


const EditModal = (props) => {

    const [name, setName] = React.useState("");
    const [url, setURL] = React.useState("");
    let color = "success";
    React.useEffect(() => {
        if (!props.data.alive) {
            color = "danger";
        }
        setURL(props.data.url);
        setName(props.data.name);
    }, [props]);

    return (
        <Modal as={Modal.Dialog} centered show={props.show} onHide={props.handleClose}>
            <Modal.Header>
                <Modal.Title className="h6">Edit subscriptiton <i>{props.data.name}</i></Modal.Title>
                <Button variant="close" aria-label="Close" onClick={props.handleClose} />
            </Modal.Header>
            <Modal.Body>
                {name !== "" && url !== "" && 
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
                }
                <Row className="justify-content-md-center">
                    <Col xs={6}>
                        <Badge bg={color} className="badge-lg">Status</Badge>
                    </Col>
                    <Col xs={6}>
                        Processed: {props.data.processed}.
                    </Col>
                </Row>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                    Save
                </Button>
                <Button variant="link" className="text-gray ms-auto" onClick={props.handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default EditModal;
