import React, {useState}  from 'react';
import { Form, Button, Card } from 'react-bootstrap';

const AddPost = () => {
    return (
        <>
            <Card style={{ width: '100%' , marginTop: '5rem'}}>
                <Card.Header>Add new post</Card.Header>
                <Form className='p-5'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="email" placeholder="Title" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="password" placeholder="Description" />
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
