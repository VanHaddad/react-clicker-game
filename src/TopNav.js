import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

class TopNav extends React.Component{
    render(){
        return(
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="#">React Clicker Game</Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>Created by Van Haddad</Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        );
    }  
}

export default TopNav