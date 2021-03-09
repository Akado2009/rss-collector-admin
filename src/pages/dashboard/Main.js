
import React from "react";
import { Col, Row } from '@themesberg/react-bootstrap';
import { RSSTable } from "../../components/Tables";

import axios from 'axios';

export default () => {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    axios.get('http://127.0.0.1:9939/get_all')
      .then(function (response) {
        // handle success
        setData(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }, []);

  return (
    <>
      <Row className="justify-content-md-center">
        <RSSTable data={data} />
      </Row>
    </>
  );
};
