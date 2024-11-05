import styled from "styled-components";

export const Container = styled.div`
    max-width: 700px;
    background: #494850;
    border-radius: 4px;
    box-shadow: 0 0 20px rgba(0,0,0,0.2);
    padding: 30px;
    margin: 80px auto;
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    h1 {
        font-size: 19px;
        margin-left: 10px;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: row;

    input {
        flex: 1;
        border: 1px solid #DDD;
        padding: 10px 15px;
        border-radius: 4px;
        font-size: 17px;
    }
`;

export const SubmitButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background: #8EA4D2;
    border: none;
    padding: 0 15px;
    margin-left: 10px;
    border-radius: 4px;
    cursor: pointer;
`;
