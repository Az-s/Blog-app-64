import React from 'react';
import { Card } from 'react-bootstrap';
import './About.css';

const About = () => {
    return (
        <>
            <Card style={{ width: '100%' , marginTop: '5rem'}}>
            <Card.Header>About Us</Card.Header>
                <div class="container about">
                    <div class="row">
                        <div class="col-md-3 col-lg-4 col-xl-3">
                            <h5>About Us</h5>
                            <hr class="bg-black mb-2 mt-0 d-inline-block mx-auto w-25"></hr>
                            <p class="mb-0">
                                Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.
                                Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.
                            </p>
                        </div>
                        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto">
                            <h5>Informations</h5>
                            <hr class="bg-black mb-2 mt-0 d-inline-block mx-auto w-25"></hr>
                            <ul class="list-unstyled">
                                <li><a href="">Link 1</a></li>
                                <li><a href="">Link 2</a></li>
                                <li><a href="">Link 3</a></li>
                                <li><a href="">Link 4</a></li>
                            </ul>
                        </div>
                        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto">
                            <h5>Others links</h5>
                            <hr class="bg-black mb-2 mt-0 d-inline-block mx-auto w-25"></hr>
                            <ul class="list-unstyled">
                                <li><a href="">Link 1</a></li>
                                <li><a href="">Link 2</a></li>
                                <li><a href="">Link 3</a></li>
                                <li><a href="">Link 4</a></li>
                            </ul>
                        </div>
                        <div class="col-md-4 col-lg-3 col-xl-3">
                            <h5>Contact</h5>
                            <hr class="bg-black mb-2 mt-0 d-inline-block mx-auto w-25"></hr>
                            <ul class="list-unstyled">
                                <li><i class="fa fa-home mr-2"></i> My company</li>
                                <li><i class="fa fa-envelope mr-2"></i> email@example.com</li>
                                <li><i class="fa fa-phone mr-2"></i> + 996 12 14 15 16</li>
                                <li><i class="fa fa-print mr-2"></i> + 996 12 14 15 16</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Card>
        </>
    )
}

export default About;
