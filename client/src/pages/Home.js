import React, { useState, useEffect } from 'react';
import { Button, Table, Container, Modal, Tab } from 'react-bootstrap';
import { getAllCompanies, deleteCompany } from '../utils/API';
import AddCompanyForm from '../components/AddCompanyForm/index';

const Home = (props) => {
    const [companiesList, setCompaniesList] = useState([]);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const getCompaniesList = async () => {
            try {
                const res = await getAllCompanies();

                if (!res.ok) {
                    throw new Error("There are no companies on the list!");
                }

                const companiesList = await res.json();
                setCompaniesList(companiesList);
            } catch (err) {
                console.error(err);
            }
        };
        getCompaniesList();
    }, []);

    const handleDeleteCompany = async (companyId) => {
        try {
            const response = await deleteCompany(companyId);

            if (!response.ok) {
                throw new Error("Something did not work!");
            }

        } catch (err) {
            console.error(err);
        }
    };

    return (
        <section>
            <Button 
                type="button" 
                variant="primary"
                onClick={() => setShowModal(true)}
            >
                Agregar Empresa
            </Button>
            <div>
                {companiesList.length ? (
                    <Table striped bordered variant="dark">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Tipo de Empresa</th>
                                <th>Fecha de Constitución</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {companiesList.map((company) => {
                                return (
                                    <tr key={company.id}>
                                        <td>{company.name}</td>
                                        <td>{company.type}</td>
                                        <td>{company.const_date}</td>
                                        <td>
                                            <Button 
                                                type="button" 
                                                variant="primary"
                                                /*onClick=""*/
                                            >
                                                Editar
                                            </Button>
                                            <span>
                                                <Button
                                                    type="button"
                                                    variant="danger"
                                                    onClick={() => handleDeleteCompany(company.id)}
                                                >
                                                    Eliminar
                                                </Button>
                                            </span>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                    ) : <h2>Sin empresas...</h2>
                }
            </div>
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