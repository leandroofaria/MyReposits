import React, { useState, useCallback, useEffect } from "react";
import { FaGithub, FaPlus, FaSpinner, FaBars, FaTrash } from 'react-icons/fa';
import { Container, Header, Form, SubmitButton, List, DeleteButton } from './styles';

import api from '../../services/api';

export default function Main() {

    const [newRepo, setNewRepo] = useState('');
    const [repositorios, setRepositorios] = useState([]);
    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState(null)

    //DidMount (Buscar)
    useEffect (() => {
        const repoStorage = localStorage.getItem('repos')

        if(repoStorage) {
            setRepositorios(JSON.parse(repoStorage))
        }
    }, [])


    //DidUpdate (Salvar Alterações)
    useEffect(() => {
        localStorage.setItem('repos', JSON.stringify(repositorios))
    }, [repositorios])

    const handleSubmit = useCallback((event) => {
        event.preventDefault();
        async function submit() {
            setLoading(true);
            setAlert(null)
            try {

                if (newRepo === ''){
                    throw new Error('Você precisa indicar um repositório')
                    
                }

                const response = await api.get(`repos/${newRepo}`);

                const hasRepo = repositorios.find(repo => repo.name === newRepo)

                if (hasRepo) {
                    throw new Error('Esse repositorio ja foi adicionado')
                }
            
                const data = {
                    name: response.data.full_name,
                };

                setRepositorios([...repositorios, data]);
                setNewRepo('');
            } catch (error) {
                setAlert(true);
                console.log(error);
            } finally {
                setLoading(false);
            }
        }
        submit();
    }, [newRepo, repositorios]);

    function handleinputChange(event) {
        setNewRepo(event.target.value);
        setAlert(null)
    }

    const handleDelete = useCallback((repo) => {
        const find = repositorios.filter(r => r.name !== repo)
        setRepositorios(find)
    }, [repositorios])

    return (
        <Container>
            <Header>
                <FaGithub size={25} />
                <h1>Meus Repositorios</h1>
            </Header>

            <Form onSubmit={handleSubmit} error={alert}>
                <input type="text" placeholder="Adicionar Repositorios" value={newRepo} onChange={handleinputChange} />

                <SubmitButton loading={loading ? 1 : 0}>
                    {loading ? (
                        <FaSpinner color="white" size={14} />
                    ) : (
                        <FaPlus color="white" size={14} />
                    )}
                </SubmitButton>
            </Form>

            <List>
                {repositorios.map(repo => (
                    <li key={repo.name}>
                        <span>
                            <DeleteButton onClick={() => handleDelete(repo.name)}>
                                <FaTrash size={15}/>
                            </DeleteButton>
                            {repo.name}
                        </span>
                        <a href=""> <FaBars size={20}/> </a>
                    </li>
                ))}
            </List>
        </Container>
    );
}
