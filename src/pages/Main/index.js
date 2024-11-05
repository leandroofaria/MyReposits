import React from "react";
import { FaGithub, FaPlus } from 'react-icons/fa';
import { Container, Header, Form, SubmitButton } from './styles';

export default function Main() {
    return (
        <Container>
            <Header>
                <FaGithub size={25} />
                <h1>Meus Repositórios</h1>
            </Header>

            <Form onSubmit={() => {}}>
                <input type="text" placeholder="Adicionar Repositorios" />
                <SubmitButton>
                    <FaPlus color="white" size={14} />
                </SubmitButton>
            </Form>
        </Container>
    );
}
