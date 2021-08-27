import React, { useState, useEffect } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import dayjs from 'dayjs';
import axiosApi from '../../axiosApi';
import axios from 'axios';

const EditPost = ({ match, history }) => {

    const [post, setPost] = useState({
        title: '',
        description: '',
    });
    
    const [date] = useState(dayjs().format('DD.MM.YYYY HH.mm'));
    
    const onInputChange = (e) => {
        const { name, value } = e.target;
        setPost(prev => ({
            ...prev,
            [name]: value,
        }))
    };
    
    const createPost = async (e) => {
        e.preventDefault();
        console.log(post);
        
        try {
            await axiosApi.post('/posts.json', { post, date })
        } finally {
            history.replace('/');
        }
    }
    
    const [editPosts, setEditPosts] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('https://az-sa-bd3f9-default-rtdb.firebaseio.com/posts/' + match.params.id + '.json');
            setEditPosts(response.data);
        };

        fetchData().catch(console.error);
    }, [match.params.id]);
    
    console.log(editPosts);

    return editPosts && (
        <Card style={{ width: '100%', marginTop: '5rem' }}>
            <Card.Header>Edit post</Card.Header>
            <Form className='p-5' onSubmit={createPost}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text"
                        name='title'
                        placeholder={editPosts.post.title}
                        value={post.title}
                        // value={editPosts.post.title}
                        // возникла проблема с value точнее с тем как получить данные с возможностью менять их
                        onChange={onInputChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        type="text"
                        name='description'
                        placeholder={editPosts.post.description}
                        value={post.description}
                        // value={editPosts.post.description}
                        onChange={onInputChange}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Save
                </Button>
            </Form>
        </Card>
    )
}

export default EditPost;
