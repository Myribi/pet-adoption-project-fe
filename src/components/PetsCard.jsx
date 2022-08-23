import { Card, Col, Button } from "react-bootstrap";
import React, { useContext } from "react";
import { FaRegHeart ,FaHeart} from "react-icons/fa";
import { Link } from 'react-router-dom';
import GeneralContext from "../contexts/CreateContext";

export default function PetsCard({pet}) {
    const {setPetCard} = useContext(GeneralContext);

  function petCardFunc() {
   setPetCard(pet)
  }

  return (
    
        <Col>
          <Card  className="card" key={pet._id}>
            <div className="card-to-heart">
              <div className="heart-container m-3">
                <FaRegHeart className="heart"/>
                <FaHeart className="heart2"/>
              </div>
              <Card.Img variant="top" src={pet.picture} className="pet-image"/>
            </div>
            <Card.Body className="titles">
              <div className="d-flex justify-content-between">
              <div>
              <Card.Title className="title" >{pet.name}</Card.Title>
              <Card.Text className="title">{pet.adoptionStatus}</Card.Text>
              </div>
              <Link to={`/petprofile/${pet._id}`} className='text-decoration-none nav-link' onClick={petCardFunc}><Button className="title"variant="light">About me!</Button></Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
  )
}
