import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import axios from 'axios';

const Post = ({ match , history}) => {

    const [editPost, setEditPost] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('https://az-sa-bd3f9-default-rtdb.firebaseio.com/posts/' + match.params.id + '.json');
            setEditPost(response.data);
        };

        fetchData().catch(console.error);
    }, [match.params.id]);

    const deletePost = async () => {
        await axios.delete('https://az-sa-bd3f9-default-rtdb.firebaseio.com/posts/' + match.params.id + '.json');
        history.replace('/');
    }
    
    console.log(editPost);

    return editPost && (
        <Card style={{ marginTop: '5rem' }} >
            <Card.Header>{editPost.date}</Card.Header>
            <Card.Body>
                <Card.Title>{editPost.post.title}</Card.Title>
                <Card.Text>
                    {editPost.post.description}
                </Card.Text>
                <Card.Body className='d-flex justify-content-between'>
                    <Button variant="primary">Edit</Button>
                    <Button variant="danger" onClick={deletePost}>&#10006;</Button>
                </Card.Body>
            </Card.Body>
        </Card >
    )
}

export default Post;
