import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Posts.css';

const Posts = () => {
    return (
        <>
            <Card style={{ marginTop: '5rem' }} className='mx-5'>
                <Card.Header>Created on:</Card.Header>
                <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <NavLink to='/post'><Button variant="outline-secondary" className='mt-2 btn-p'>Read more &#xbb;</Button></NavLink>
                </Card.Body>
            </Card>
        </>
    )
}

export default Posts;
