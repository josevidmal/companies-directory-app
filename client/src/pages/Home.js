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
        <section id="home-container" className="containers">
            <Button
                id="add-company-btn"
                className="btns"
                type="button" 
                variant="primary"
                onClick={() => setShowModal(true)}
            >
                Agregar Empresa
            </Button>
            <div id="table-container" className="containers">
                {companiesList.length ? (
                    <Table id="companies-table" className="tables" striped bordered variant="dark">
                        <thead id="comp-table-header" className="tables-headers">
                            <tr id="comp-table-headings-row" className="tables-headings-rows">
                                <th id="comp-table-name-heading" className="table-headings">Nombre</th>
                                <th id="comp-table-type-heading" className="table-headings">Tipo de Empresa</th>
                                <th id="comp-table-date-heading" className="table-headings">Fecha de Constitución</th>
                                <th id="comp-table-actions-heading" className="table-headings">Acciones</th>
                            </tr>
                        </thead>
                        <tbody id="comp-table-body" className="tables-body">
                            {companiesList.map((company) => {
                                return (
                                    <tr className="comp-table-body-rows" key={company.id}>
                                        <td className="comp-table-names">{company.name}</td>
                                        <td className="comp-table-types">{company.type}</td>
                                        <td className="comp-table-dates">{new Date(company.const_date).toLocaleDateString('es-MX', { timeZone: 'UTC' })}</td>
                                        <td className="comp-table-actions">
                                            <Button
                                                className="btns comp-table-btns" 
                                                type="button" 
                                                variant="primary"
                                                onClick={() => {
                                                    setCompanyId(company.id)
                                                    setCompanyName(company.name)
                                                    setCompanyConstDate(company.const_date.slice(0, 10))
                                                    setCompanyType(company.type)
                                                    setCompanyComments(company.comments)
                                                    setShowUpdateModal(true)
                                                }}
                                            >
                                                Editar
                                            </Button>
                                            <Button
                                                className="btns comp-table-btns"
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
                    ) : <h2 id="no-companies-heading" className="headings">Sin empresas...</h2>
                }
            </div>
            <Modal
                id="add-comp-modal"
                className="modals"
                {...props}
                size="lg"
                show={showModal}
                onHide={() => setShowModal(false)}
                aria-labelledby="add-company-modal"
                centered
            >
                <Modal.Header id="add-comp-modal-header" className="modals-headers" closeButton>
                    <Modal.Title id="add-comp-modal-title" className="modals-titles">Agregar Empresa</Modal.Title>
                </Modal.Header>
                <Modal.Body id="add-comp-modal-body" className="modals-body">
                    <AddCompanyForm />
                </Modal.Body>
            </Modal>

            <Modal
                id="update-comp-modal"
                className="modals"
                {...props}
                size="lg"
                show={showUpdateModal}
                onHide={() => setShowUpdateModal(false)}
                aria-labelledby="update-company-modal"
                centered
            >
                <Modal.Header id="update-comp-modal-header" className="modals-headers" closeButton>
                    <Modal.Title id="update-comp-modal-title" className="modals-titles" >Editar Empresa</Modal.Title>
                </Modal.Header>
                <Modal.Body id="update-comp-modal-body" className="modals-body">
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
                id="delete-comp-modal"
                className="modals"
                {...props}
                size="lg"
                show={showDeleteModal}
                onHide={() => setShowDeleteModal(false)}
                aria-labelledby="delete-company-modal"
                centered
            >
                <Modal.Header id="delete-comp-modal-header" className="modals-headers" closeButton>
                    <Modal.Title id="delete-comp-modal-title" className="modals-titles">Eliminar Empresa</Modal.Title>
                </Modal.Header>
                <Modal.Body id="delete-comp-modal-body" className="modals-body">
                    <DeleteCompanyForm 
                        id={companyId}
                    />
                    <Button
                        id="cancel-delete-btn"
                        className="btns"
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