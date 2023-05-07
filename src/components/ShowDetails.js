import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Modal, Card } from 'react-bootstrap';

const ShowDetails = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [formInputs, setFormInputs] = useState({
    movieName: '',
    // Add other relevant details here
  });

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then(response => response.json())
      .then(data => setShow(data));
  }, [id]);

  const handleBookTicket = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleSubmit = () => {
    // Logic to handle form submission and storing user details in local storage
    // Assuming you want to store the movie name and other details in local storage

    // Save formInputs to local storage
    localStorage.setItem('movieName', formInputs.movieName);
    // Add other relevant details
    // localStorage.setItem('otherDetail', formInputs.otherDetail);

    // Clear form inputs
    setFormInputs({
      movieName: '',
      // Reset other form inputs
    });

    // Close the modal
    closeModal();
  };

  return (
    <div className="d-flex justify-content-center align-items-center m-6" style={{ height: '100vh' }}>
      <div>
        <h1>Show Details</h1>
        {show ? (
          <div >
            <Card style={{ display: 'flex', margin: '2rem', flexDirection: 'column' }}>
              <Card.Img variant="top" src={show.image.medium} style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain', boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2)' }} />
              <Card.Body style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
                <Card.Title style={{ fontSize: '20px', fontWeight: 'bolder', textAlign: 'center' }}>{show.name}</Card.Title>
                <Card.Text style={{ fontSize: '15px',  textAlign: 'center' }}>{show.summary}</Card.Text>
                <Button onClick={handleBookTicket} variant="primary" style={{ backgroundColor: '#4169e1',padding:'10px',fontSize:'16px' }}>
                  Book Movie Ticket
                </Button>
              </Card.Body>
            </Card>
          </div>
        ) : (
          <p>Loading...</p>
        )}

        <Modal show={showModal} onHide={closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Book Movie Ticket</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="movieName">Movie Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="movieName"
                  value={formInputs.movieName}
                  onChange={e => setFormInputs({ ...formInputs, movieName: e.target.value })}
                />
              </div>
              {/* Add other form inputs here */}
              {/* ... */}
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </form>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};

export default ShowDetails;
