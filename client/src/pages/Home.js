import React, { useState } from 'react';
import { Button, Container, Modal, Tab } from 'react-bootstrap';
import { getAllCompanies } from '../utils/API';
import AddCompanyForm from '../components/AddCompanyForm/index';

const Home = (props) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <section>
            <Button 
                type="button" 
                variant="primary"
                onClick={() => setShowModal(true)}
            >
                Agregar Empresa
            </Button>

            <Modal
                {...props}
                size="lg"
                show={showModal}
                onHide={() => setShowModal(false)}
                aria-labelledby="add-company-modal"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Agregar Empresa</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddCompanyForm />
                </Modal.Body>
            </Modal>
        </section>
    );
};

export default Home;