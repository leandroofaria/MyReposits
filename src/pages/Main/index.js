import React, {useState} from "react";
import { FaGithub, FaPlus } from 'react-icons/fa';
import { Container, Header, Form, SubmitButton } from './styles';

export default function Main() {

    const [newRepo, setNewRepo] = useState('');

    function handleinputChange(event){
        setNewRepo(event.target.value)
    }

    return (
        <Container>

            <Header>

                <FaGithub size={25} />
                <h1>Meus Repositórios</h1>

            </Header>

            <Form onSubmit={() => {}}>

                <input type="text" placeholder="Adicionar Repositorios" value={newRepo} onChange={handleinputChange}/>

                <SubmitButton>
                    <FaPlus color="white" size={14} />
                </SubmitButton>

            </Form>

        </Container>
    );
}
