import React, { useState } from 'react';
import { addCompany } from '../../utils/API';
import { Form, Button, Alert } from 'react-bootstrap';

const AddCompanyForm = () => {
    const [companyFormData, setCompanyFormData] = useState({ name: '', const_date: '', type: '', comments: '' });
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
            const response = await addCompany(companyFormData);

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

        setCompanyFormData({
            name: '',
            const_date: '',
            type: '',
            comments: '',
        });
    };

    return (
        <section id="add-comp-container" className="containers">
            <Form id="add-comp-form" className="forms" onSubmit={handleFormSubmit}>
                <Alert 
                    id="add-comp-alert" className="alerts"
                    dismissible 
                    onClose={() => setShowAlert(false)} 
                    show={showAlert} 
                    variant='success'
                >
                    La empresa ha sido agregada!
                </Alert>
                <Form.Group className="forms-groups">
                    <Form.Label className="forms-labels" htmlFor="name">Nombre de la Empresa:</Form.Label>
                    <Form.Control
                        className="forms-fields" 
                        name="name"
                        type="text"
                        value={companyFormData.name}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group className="forms-groups">
                    <Form.Label className="forms-labels" htmlFor="cons_date">Fecha de Constitución:</Form.Label>
                    <Form.Control 
                        className="forms-fields"
                        name="const_date"
                        type="date"
                        value={companyFormData.const_date}
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Form.Group className="forms-groups">
                    <Form.Label className="forms-labels" htmlFor="type">Tipo de Empresa:</Form.Label>
                    <Form.Select 
                        className="forms-fields"
                        name="type"
                        defaultValue=""
                        onChange={handleInputChange}
                    >
                        <option className="forms-options" value=""></option>
                        <option className="forms-options" value="Distribuidor">Distribuidor</option>
                        <option className="forms-options" value="Mayorista">Mayorista</option>
                        <option className="forms-options" value="Usuario Final">Usuario Final</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="forms-groups">
                    <Form.Label className="forms-labels" htmlFor="comments">Comentarios</Form.Label>
                    <Form.Control 
                        className="forms-fields"
                        as="textarea"
                        rows={4} 
                        name="comments"
                        value={companyFormData.comments}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                {requiredField && (
                    <p className="req-fields-msg" style={{ color: "red"}}>{requiredField}</p>
                )}
                <Button
                    id="add-comp-form-btn"
                    className="btns"
                    type="sumbit"
                    variant="success"
                >
                    Agregar
                </Button>
            </Form>
            {error && (
                <p className="errors-msg" style={{ color: "red"}}>{error}</p>
            )}
        </section>
    );
};

export default AddCompanyForm;