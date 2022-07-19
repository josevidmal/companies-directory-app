import React, { useState } from 'react';
import { deleteCompany } from '../../utils/API';
import { Card, Button, Alert } from 'react-bootstrap';

const DeleteCompanyForm = (props) => {
    const [error, setError] = useState('');
    const [showAlert, setShowAlert] = useState(false);

    const handleDeleteCompany = async (companyId) => {
        try {
            const response = await deleteCompany(companyId);

            if (!response.ok) {
                throw new Error("Something did not work!");
            }

            setShowAlert(true);
            window.setTimeout(() => {window.location.reload()}, 3000);
        } catch (err) {
            console.error(err);
            setError("No fue posible eliminar la empresa!");
        }
    };

    return (
        <section id="delete-comp-container" className="containers">
            <Card id="delete-comp-card" className="cards">
                <Alert
                    id="delete-comp-alert" 
                    className="alerts"
                    dismissible
                    onClose={() => setShowAlert(false)}
                    show={showAlert}
                    variant='danger'
                >
                    La empresa ha sido eliminada!
                </Alert>
                <Card.Body id="delete-comp-card-body" className="cards-body">
                    <Card.Text id="delete-comp-card-text" className="cards-text">
                        ¿Estás seguro de que deseas eliminar esta empresa?
                    </Card.Text>
                    <Button
                        id="accept-delete-btn"
                        className="btns"
                        type="button"
                        variant="danger"
                        onClick={() => handleDeleteCompany(props.id)}
                    >
                        Aceptar
                    </Button>
                </Card.Body>
            </Card>
            {error && (
                <p className="errors-msg">{error}</p>
            )}
        </section>
    )
};

export default DeleteCompanyForm;