import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCheckCircle, faStopCircle } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Card, Table } from '@themesberg/react-bootstrap';

import Moment from 'react-moment';


export const RSSTable = (props) => {
    const TableRow = (props) => {
      const { name, url, created, processed, alive } = props;
      const bounceIcon = !alive  ? faStopCircle : faCheckCircle;
      const bounceTxtColor = !alive  ? "text-danger" : "text-success";
      return (
        <tr>
            <th scope="row">{name}</th>
            <td>{url}</td>
            <td><Moment>{created}</Moment></td>
            <td>{processed}</td>
            <td>
                <FontAwesomeIcon icon={bounceIcon} className={`${bounceTxtColor} me-3`} />
              {alive}
            </td>
        </tr>
      );
    };
    console.log(props);
    return (
      <Card border="light" className="shadow-sm">
        <Card.Header>
          <Row className="align-items-center">
            <Col>
              <h5>RSS Subscriptions</h5>
            </Col>
          </Row>
        </Card.Header>
        <Table responsive className="align-items-center table-flush">
          <thead className="thead-light">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">URL</th>
              <th scope="col">Addition date</th>
              <th scope="col">Processed</th>
              <th scope="col">Alive</th>
            </tr>
          </thead>
          <tbody>
            {props.data.map(pv => <TableRow key={`page-visit-${pv.id}`} {...pv} />)}
          </tbody>
        </Table>
      </Card>
    );
  };