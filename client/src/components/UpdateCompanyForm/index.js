import React, { useState } from 'react';
import { updateCompany } from '../../utils/API';
import { Form, Button, Alert } from 'react-bootstrap';

const UpdateCompanyForm = (props) => {
    const [companyFormData, setCompanyFormData] = useState({ name: `${props.name}`, const_date: `${props.const_date}`, type: props.type, comments: `${props.comments}` });
    const [requiredField, setRequiredField] = useState('');
    const [error, setError] = useState('');
    const [showAlert, setShowAlert] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCompanyFormData({ ...companyFormData, [name]: value });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        if (!companyFormData.name) {
            setRequiredField("Por favor ingrese el nombre de la compañía");
            return;
        } if (!companyFormData.const_date || companyFormData.const_date === 'dd/mm/yyyy') {
            setRequiredField("Por favor ingrese la fecha de constitución");
            return;
        } if (new Date(companyFormData.const_date) > new Date()) {
            setRequiredField("Por favor ingrese una fecha válida (el día de hoy o anterior)");
            return;
        } if (!companyFormData.type || companyFormData.type === "") {
            setRequiredField("Por favor seleccione un tipo de compañía");
            return;
        }

        try {
            const response = await updateCompany(props.id, companyFormData);

            if (!response.ok) {
                throw new Error("Something did not work!");
            }

            const company = await response.json();
            console.log(company);
            setShowAlert(true);
            window.setTimeout(() => {window.location.reload()}, 3000);
        } catch (err) {
            console.error(err);
            setError("No fue posible añadir la empresa!");
        }
    };

    return (
        <section>
            <Form onSubmit={handleFormSubmit}>
                <Alert 
                    dismissible 
                    onClose={() => setShowAlert(false)} 
                    show={showAlert} 
                    variant='success'
                >
                    Los datos de la empresa se han modificado!
                </Alert>
                <Form.Group>
                    <Form.Label htmlFor="name">Nombre de la Empresa:</Form.Label>
                    <Form.Control 
                        name="name"
                        type="text"
                        value={companyFormData.name}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label htmlFor="cons_date">Fecha de Constitución:</Form.Label>
                    <Form.Control 
                        name="const_date"
                        type="date"
                        value={companyFormData.const_date}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label htmlFor="type">Tipo de Empresa:</Form.Label>
                    <Form.Select 
                        name="type"
                        defaultValue={props.type}
                        onChange={handleInputChange}
                    >
                        <option value=""></option>
                        <option value="Distribuidor">Distribuidor</option>
                        <option value="Mayorista">Mayorista</option>
                        <option value="Usuario Final">Usuario Final</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group>
                    <Form.Label htmlFor="comments">Comentarios</Form.Label>
                    <Form.Control 
                        as="textarea"
                        rows={4} 
                        name="comments"
                        value={companyFormData.comments}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                {requiredField && (
                    <p>{requiredField}</p>
                )}
                <Button
                    type="sumbit"
                    variant="success"
                >
                    Modificar
                </Button>
            </Form>
            {error && (
                <p>{error}</p>
            )}
        </section>
    );
};

export default UpdateCompanyForm;