import React, { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import axios from 'axios';
import axiosApi from '../../axiosApi';

const AddPost = () => {

    const [post, setPost] = useState({
        title: '',
        description: '',
    });

    const onInputChange = (e) => {
        const { name, value } = e.target;
        // const name = e.target.name
        // const value = e.target.value
        setPost(prev => ({
            ...prev,
            [name]: value,
        }))
    };

    const createPost = async (e) => {
        e.preventDefault();
        console.log(post);

        try {
            await axiosApi.post('')
        } catch(e){

        }
    }

    return (
        <>
            <Card style={{ width: '100%', marginTop: '5rem' }}>
                <Card.Header>Add new post</Card.Header>
                <Form className='p-5' onSubmit={createPost}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            type="text"
                            name='title'
                            placeholder="Title"
                            value={post.title}
                            onChange={onInputChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            type="text"
                            name='description'
                            placeholder="Description"
                            value={post.description}
                            onChange={onInputChange}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Card>
        </>
    )
}

export default AddPost;
