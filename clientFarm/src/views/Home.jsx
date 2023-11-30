import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { fetchFarmsAsyncSuccess } from "../store/actions/actionCreator";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ReusableCard from "../components/reusableCard";
import Button from "react-bootstrap/esm/Button";

export default function Home() {
  const dispatch = useDispatch();
  const farms = useSelector((state) => {
    return state.farms.farms;
  });

  useEffect(() => {
    dispatch(fetchFarmsAsyncSuccess());
  }, []);

  return (
    <Container>
      <div className="content-container" style={{marginTop: 50}}>
        <Button className="add-farm-button" variant="success" style={{marginBottom: 10 }}>Add Kandang</Button>
        <Row xs={1} md={2} lg={3}>
          {farms.map((farm) => (
            <Col key={farm.id}>
              <ReusableCard farm={farm} />
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
}


