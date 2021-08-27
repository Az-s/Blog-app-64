import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Posts from './components/Posts/Posts';
import About from './components/AboutUs/About';
import AddPost from './components/AddPost/AddPost';
import Contacts from './components/Contacts/Contacts';
import Post from './components/Post/Post';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Container>
          <Route exact path='/' component={Posts} />
          <Route path='/post' component={Post} />
          <Route path='/add' component={AddPost} />
          <Route path='/contacts' component={Contacts} />
          <Route path='/about' component={About} />
        </Container>
      </Router>
    </div>
  );
}

export default App;
