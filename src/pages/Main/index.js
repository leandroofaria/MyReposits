import React, { useState, useCallback } from "react";
import { FaGithub, FaPlus, FaSpinner } from 'react-icons/fa';
import { Container, Header, Form, SubmitButton } from './styles';

import api from '../../services/api';

export default function Main() {

    const [newRepo, setNewRepo] = useState('');
    const [repositorios, setRepositorios] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSubmit = useCallback((event) => {
        event.preventDefault();
        async function submit() {
            setLoading(true);
            try {
                const response = await api.get(`repos/${newRepo}`);
                const data = {
                    name: response.data.full_name,
                };

                setRepositorios([...repositorios, data]);
                setNewRepo('');
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }
        submit();
    }, [newRepo, repositorios]);

    function handleinputChange(event) {
        setNewRepo(event.target.value);
    }

    return (
        <Container>
            <Header>
                <FaGithub size={25} />
                <h1>Meus Repositorios</h1>
            </Header>

            <Form onSubmit={handleSubmit}>
                <input type="text" placeholder="Adicionar Repositorios" value={newRepo} onChange={handleinputChange} />

                <SubmitButton loading={loading ? 1 : 0}>
                    {loading ? (
                        <FaSpinner color="white" size={14} />
                    ) : (
                        <FaPlus color="white" size={14} />
                    )}
                </SubmitButton>
            </Form>
        </Container>
    );
}
