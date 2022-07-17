import React from 'react';
import { FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa';
import ListGroup from 'react-bootstrap/ListGroup'; 

const Footer = () => {
    return (
        <footer>
            <h4>Reto Técnico realizado por:<br></br>José Vidal Maza Alonso<br></br>Full Stack Web Developer</h4>
            <ListGroup horizontal>
                <ListGroup.Item><a className="footer-links" href="https://github.com/josevidmal"><FaGithub /></a></ListGroup.Item>
                <ListGroup.Item><a className="footer-links" href="https://www.linkedin.com/in/jose-vidal-maza-alonso-73477646/"><FaLinkedin /></a></ListGroup.Item>
                <ListGroup.Item><a className="footer-links" href="https://stackoverflow.com/users/17156054/jos%c3%a9-vidal"><FaStackOverflow /></a></ListGroup.Item>
            </ListGroup>
        </footer>
    );
};

export default Footer;