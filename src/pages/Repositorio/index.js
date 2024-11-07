import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { Container,Owner,Loading, BackButton } from './styles';
import api from "../../services/api";
import { FaArrowLeft } from 'react-icons/fa';

export default function Repositorio() {
    const { repositorio } = useParams();  

    const [esseRepositorio, setEsseRepositorio] = useState({})
    const [issues, setIssues] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function load() {
            const nomeRepo = decodeURIComponent(repositorio);
            
            const [repositorioData, issuesData] = await Promise.all([
                api.get(`/repos/${nomeRepo}`),
                api.get(`/repos/${nomeRepo}/issues`, {
                    params: {
                        state: 'open',
                        per_page: 5
                    }
                })
            ]);
            
            

            setEsseRepositorio(repositorioData.data)
            setIssues(issuesData.data)
            setLoading(false)
        }

        load();
    }, [repositorio]); 

    if(loading) {
        return (
            <Loading>
                <h1>Carregando</h1>
            </Loading>
        )
    }

    return (
        <Container>

            <BackButton to="/">
                <FaArrowLeft color="#8EA4D2" size={30}/>
            </BackButton>

            <Owner>
                {esseRepositorio.owner && (
                    <img src={esseRepositorio.owner.avatar_url} alt={esseRepositorio.owner.login}/>
                )}
                
                <h1>{esseRepositorio.name}</h1>
                
                <p>{esseRepositorio.description}</p>
            </Owner>
        </Container>

    );
};
