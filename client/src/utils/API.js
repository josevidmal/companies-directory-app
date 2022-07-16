export const getAllCompanies = () => {
    return fetch('/', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
};

export const addCompany = (companyData) => {
    return fetch('/api/companies', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(companyData),
    });
};

export const updateCompany = (companyId, companyData) => {
    return fetch(`/api/companies/${companyId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(companyData),
    });
};

export const deleteCompany = (companyId) => {
    return fetch(`/api/companies/${companyId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    });
};