import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCheckCircle, faStopCircle, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Col, Button, Row, Card, Table } from '@themesberg/react-bootstrap';

import EditModal from './EditModal.js';
import DeleteModal from './DeleteModal.js';

import Moment from 'react-moment';

import AddModal from './AddModal.js';



export const RSSTable = (props) => {

    const [editOpen, handleEditOpen] = React.useState(false);
    const [deleteOpen, handleDeleteOpen] = React.useState(false);
    const [addOpen, handleAddOpen] = React.useState(false);

    const [subData, setSubData] = React.useState({});

    const onClose = () => {
        handleEditOpen(false);
        handleDeleteOpen(false);
        handleAddOpen(false);
    };

    const onOpen = (subData) => () => {
        handleEditOpen(true);
        setSubData(subData);
    };

    const onDelete = (subData) => () => {
        handleDeleteOpen(true);
        setSubData(subData);
    } 

    const TableRow = (props) => {
      const { name, url, created, processed, alive } = props;
      const bounceIcon = !alive  ? faStopCircle : faCheckCircle;
      const bounceTxtColor = !alive  ? "text-danger" : "text-success";
      return (
        <tr>
            <th scope="row">{name}</th>
            <td>
                <FontAwesomeIcon icon={bounceIcon} className={`${bounceTxtColor} me-3`} />
              {alive}
            </td>
            <td>
                <Button variant="outline-primary" size="sm" onClick={onOpen({name, url, created, processed, alive})}>Detail</Button>
            </td>
            <td>
                <FontAwesomeIcon onClick={onDelete({name})} icon={faTrash} className={`text-dark me-3`} />
            </td>
        </tr>
      );
    };
    return (
      <Card border="light" className="shadow-sm">
        <Card.Header>
          <Row className="align-items-center">
            <Col>
              <h5>RSS Subscriptions</h5>
            </Col>
          </Row>

          <Row className="justify-content-md-left">
            <Col xs={6}>
              <Button variant="secondary" onClick={() => handleAddOpen(true)}>
                <FontAwesomeIcon icon={faPlus} className="me-2" />Add a subscription
              </Button>
            </Col>
          </Row>
        </Card.Header>
        <Table responsive className="align-items-center table-flush">
          <thead className="thead-light">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Alive</th>
              <th scope="col">Detail</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {props.data.map(pv => <TableRow key={`page-visit-${pv.id}`} {...pv} />)}
          </tbody>
        </Table>
        <EditModal show={editOpen} handleClose={onClose} data={subData} />
        <DeleteModal show={deleteOpen} handleClose={onClose} data={subData} onAction={props.onAction} />

        <AddModal show={addOpen} handleClose={onClose} onAction={props.onAction} />
      </Card>
    );
  };