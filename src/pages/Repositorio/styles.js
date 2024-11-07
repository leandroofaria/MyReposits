import styled from "styled-components";
import {Link} from 'react-router-dom'

export const Loading = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

export const Container = styled.div`
    max-width: 700px;
    background: #494850;
    border-radius: 4px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    padding: 30px;
    margin: 80px auto;
`;

export const Owner = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    img {
        width: 150px;
        border-radius: 20%;
        margin: 20px 0;

    }

    h1 {
        font-size: 30px;
        color: whitesmoke;
        margin-top: 0.8rem;
        
    }

    p {
        margin-top: 5px;
        font-size: 14px;
        color: whitesmoke;
        text-align: center;
        line-height: 1.4;
        max-width: 400px;
        padding: 7px 0;
    }
`;


export const BackButton = styled(Link)`
    border: 0;
    outline: 0;
    background: transparent;

`;

export const IssuesList = styled.ul`
    margin-top: 30px;
    padding-top: 30px;
    list-style: none;

    li {

        display: flex;
        padding: 15px 10px;


        & + li {
            border-top: 1px solid gray}

    }

    img {
        width: 50px ;
        height: 50px ;
        border-radius: 50%;
    }

    div {
        flex: 1;
        margin-left: 15px;

        p {
            margin-top: 10px;
            font-size: 12px;
            
        }
    }

    strong {
        font-size: 14px;
        
        a {
            text-decoration: none;
            transform: 0.3s;

            &:hover {
                color: #8EA4D2;
            }
        }

        span {
            font-size: 11px;
            font-weight: 600;
            margin-left: 4px;
        }
    }
`

// export const IssuesList = styled.div`

// `