import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import axiosApi from '../../axiosApi';
import './Posts.css';

const Posts = () => {
    const [allPosts, setAllPosts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('https://az-sa-bd3f9-default-rtdb.firebaseio.com/posts.json');
            setAllPosts(response.data);
            console.log(response.data)
            console.log(allPosts)
        };

        fetchData().catch(console.error);
    }, []);

    return (
        <>
            {allPosts.map(post => (
                <Card style={{ marginTop: '5rem' }} className='mx-5' key={id}>
                    <Card.Header>Created on: {post.date}</Card.Header>
                    <Card.Body>
                        <Card.Title>{post.title}</Card.Title>
                        <NavLink to='/post'><Button variant="outline-secondary" className='mt-2 btn-p'>Read more &#xbb;</Button></NavLink>
                    </Card.Body>
                </Card>
            ))}
        </>
    )
}

export default Posts;
