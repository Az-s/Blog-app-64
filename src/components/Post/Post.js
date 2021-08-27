import React from 'react';
import { Card , Button } from 'react-bootstrap';

const Post = () => {
    return (
        <>
            <Card style={{ marginTop: '5rem' }}>
                <Card.Header>Featured</Card.Header>
                <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                        With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                    <Card.Body className='d-flex justify-content-between'>
                        <Button variant="primary">Edit</Button>
                        <Button variant="danger">&#10006;</Button>
                    </Card.Body>
                </Card.Body>
            </Card>
        </>
    )
}

export default Post;
