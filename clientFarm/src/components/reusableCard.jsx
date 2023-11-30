import React from "react";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "../css/card.css";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

export default function ReusableCard({ farm }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onPeriodClick = async (e) => {
    try {
      e.preventDefault();
      navigate(`/period-list/${farm.id}`)
    } catch (err) {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: `${err}`,
        showConfirmButton: true,
        timer: 1500
      });
    }
  } 
  return (
    <Card style={{ marginRight: "10px" }}>
      <Card.Img variant="top" src={farm.imgUrl} className="imageStyles" />
      <Card.Body>
        <Card.Title>{farm.name}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Category: {farm.category}</ListGroup.Item>
        <ListGroup.Item>Lokasi: {farm.location}</ListGroup.Item>
        <ListGroup.Item>Strain: {farm.strain}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Button variant="success" onClick={onPeriodClick} style={{ marginRight: 15 }}>
          Period
        </Button>
        <Button variant="warning" style={{ color: "black" }}>Edit</Button>
      </Card.Body>
    </Card>
  );
}


