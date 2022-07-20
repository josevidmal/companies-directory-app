import React from 'react';
import { FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa';
import ListGroup from 'react-bootstrap/ListGroup'; 

const Footer = () => {
    return (
        <footer id="footer-container" className="containers">
            <h4 id="footer-title" className="headings">Reto Técnico realizado por:<br></br>José Vidal Maza Alonso<br></br>Full Stack Web Developer</h4>
            <ListGroup horizontal id="footer-list" className="lists">
                <ListGroup.Item className="footer-list-item"><a id="github-link" className="footer-links" href="https://github.com/josevidmal"><FaGithub /></a></ListGroup.Item>
                <ListGroup.Item className="footer-list-item"><a id="linkedin-link" className="footer-links" href="https://www.linkedin.com/in/jose-vidal-maza-alonso-73477646/"><FaLinkedin /></a></ListGroup.Item>
                <ListGroup.Item className="footer-list-item"><a id="stackoverflow-link" className="footer-links" href="https://stackoverflow.com/users/17156054/jos%c3%a9-vidal"><FaStackOverflow /></a></ListGroup.Item>
            </ListGroup>
        </footer>
    );
};

export default Footer;