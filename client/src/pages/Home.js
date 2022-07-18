import React, { useState, useEffect } from 'react';
import { Button, Table, Modal } from 'react-bootstrap';
import { getAllCompanies } from '../utils/API';
import AddCompanyForm from '../components/AddCompanyForm/index';
import UpdateCompanyForm from '../components/UpdateCompanyForm/index';
import DeleteCompanyForm from '../components/DeleteCompanyForm/index';

const Home = (props) => {
    const [companiesList, setCompaniesList] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const [companyId, setCompanyId] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [companyConstDate, setCompanyConstDate] = useState('');
    const [companyType, setCompanyType] = useState('');
    const [companyComments, setCompanyComments] = useState('');

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
                                                onClick={() => {
                                                    setCompanyId(company.id)
                                                    setCompanyName(company.name)
                                                    setCompanyConstDate(new Date(company.const_date).toISOString().slice(0, 10))
                                                    setCompanyType(company.type)
                                                    setCompanyComments(company.comments)
                                                    setShowUpdateModal(true)
                                                }}
                                            >
                                                Editar
                                            </Button>
                                            <Button
                                                type="button"
                                                variant="danger"
                                                onClick={() => {
                                                    setCompanyId(company.id)
                                                    setShowDeleteModal(true)
                                                }}
                                            >
                                                Eliminar
                                            </Button>
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

            <Modal
                {...props}
                size="lg"
                show={showUpdateModal}
                onHide={() => setShowUpdateModal(false)}
                aria-labelledby="update-company-modal"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Editar Empresa</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <UpdateCompanyForm 
                        id={companyId}
                        name={companyName} 
                        const_date={companyConstDate} 
                        type={companyType} 
                        comments={companyComments}
                    />
                </Modal.Body>
            </Modal>

            <Modal
                {...props}
                size="lg"
                show={showDeleteModal}
                onHide={() => setShowDeleteModal(false)}
                aria-labelledby="delete-company-modal"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Eliminar Empresa</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <DeleteCompanyForm 
                        id={companyId}
                    />
                    <Button
                        type="button"
                        variant="secondary"
                        onClick={() => setShowDeleteModal(false)}
                    >
                        Cancelar
                    </Button>
                </Modal.Body>
            </Modal>
        </section>
    );
};

export default Home;