import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

const ShowList = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then(response => response.json())
      .then(data => setShows(data));
  }, []);

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div>
        <h1 style={{textAlign:'center'}}>TV Show List</h1>
        <div className="row">
          {shows.map(show => (
            <div className="col-md-4" key={show.show.id}>
              <Card style={{ display: 'flex', margin: '2rem', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '200px' }}>
                  <Card.Img
                    variant="top"
                    src={show.show.image?.medium}
                    style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain', boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2)' }}
                  />
                </div>
                <Card.Body style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <Card.Title style={{ fontSize: '20px', fontWeight: 'bolder', textAlign: 'center' }}>
                    {show.show.name}
                  </Card.Title>
                  {/* Display additional details here */}
                  <Link to={`/show/${show.show.id}`} style={{ alignSelf: 'center', marginTop: '10px' }}>
                    <Button variant="primary" style={{ backgroundColor: '#4169e1',padding:'10px',fontSize:'15px' }}>
                      Show Details
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShowList;
