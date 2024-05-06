import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Carousel,
  Button,
  Modal,
  Navbar,
} from 'react-bootstrap';

const TerceraPantalla = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [peliculasGustadas, setPeliculasGustadas] = useState([]);
  const [peliculasNoGustadas, setPeliculasNoGustadas] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const peliculas = [
    {
      image:
        'https://i.pinimg.com/564x/02/21/98/022198de5dbb2f6b04db650e58d8ee4b.jpg',
      title: 'Enredados',
    },
    {
      image:
        'https://i.pinimg.com/564x/5d/f4/98/5df498d7773144f2ae336575caeef9d2.jpg',
      title: 'Valiente',
    },
    {
      image:
        'https://i.pinimg.com/564x/02/1c/6e/021c6ed54d90d23bd00465e8263ac12a.jpg',
      title: 'La princesa y el sapo',
    },
    {
      image:
        'https://i.pinimg.com/564x/d0/bf/c7/d0bfc7a127a742e0ef2c27d6b99feefd.jpg',
      title: 'Ratatouille',
    },
    {
      image:
        'https://i.pinimg.com/564x/3e/80/54/3e8054240c542dabc921035fbe546a9b.jpg',
      title: 'Luca',
    },
  ];

  const handleSelect = (selectedIndex, e) => {
    setActiveIndex(selectedIndex);
  };

  const handleButton = (like) => {
    if (like) {
      setPeliculasGustadas([...peliculasGustadas, peliculas[activeIndex]]);
    } else {
      setPeliculasNoGustadas([...peliculasNoGustadas, peliculas[activeIndex]]);
    }

    if (activeIndex < peliculas.length - 1) {
      setActiveIndex(activeIndex + 1);
    } else {
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleGoToBeginning = () => {
    setActiveIndex(0);
    setPeliculasGustadas([]);
    setPeliculasNoGustadas([]);
    setShowModal(false);
  };

  return (
    <>
      <Navbar className="navbar-dark bg-dark">
        <Container>
          <Navbar.Brand href="#">Home</Navbar.Brand>
        </Container>
      </Navbar>
      <div style={{ backgroundColor: '#d8edf1', minHeight: '100vh' }}>
        <Container fluid className="p-5">
          <Row className="justify-content-center m-2">
            <Col md={12} className="p-0">
              <Carousel
                activeIndex={activeIndex}
                onSelect={handleSelect}
                fade
                interval={null}
                indicators={false}
              >
                {peliculas.map((pelicula, index) => (
                  <Carousel.Item key={index}>
                    <img
                      className="d-block w-100"
                      src={pelicula.image}
                      alt={pelicula.title}
                      style={{ maxHeight: '80vh', objectFit: 'contain' }}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
              <Row className="mt-3">
                <Col className="text-left">
                  <Button variant="success" onClick={() => handleButton(true)}>
                    Me Gusta
                  </Button>
                </Col>
                <Col className="text-right">
                  <Button variant="danger" onClick={() => handleButton(false)}>
                    No Me Gusta
                  </Button>
                </Col>
              </Row>
              <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                  <Modal.Title>Lista de Películas Gustadas</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <ul>
                    {peliculasGustadas.map((pelicula, index) => (
                      <li key={index}>Película: {pelicula.title}</li>
                    ))}
                  </ul>
                  <hr />
                  <h5>Películas No Gustadas</h5>
                  <ul>
                    {peliculasNoGustadas.map((pelicula, index) => (
                      <li key={index}>Película: {pelicula.title}</li>
                    ))}
                  </ul>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleCloseModal}>
                    Cerrar
                  </Button>
                  <Button variant="primary" onClick={handleGoToBeginning}>
                    Regresar al Inicio
                  </Button>
                </Modal.Footer>
              </Modal>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default TerceraPantalla;
