import styled, {keyframes, css} from "styled-components";

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
        font-size: 16px;
        margin-left: 10px;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: row;

    input {
        flex: 1;
        border: 1px solid ${props => (props.error ? 'red' : 'whitesmoke')};
        padding: 10px 15px;
        border-radius: 4px;
        font-size: 17px;
    }
`;

//Criando animação do botão
const animate = keyframes`
    from {
    transform: rotate(0deg)
    } to {
        transform: rotate(360deg)
    }
`

export const SubmitButton = styled.button.attrs(props => ({
    type: 'submit',
    disabled: props.loading,
}))`
    display: flex;
    align-items: center;
    justify-content: center;
    background: #8EA4D2;
    border: none;
    padding: 0 15px;
    margin-left: 10px;
    border-radius: 4px;
    cursor: pointer;

    &[disabled] {
        cursor: not-allowed;
        opacity: 0.5;
    }

    ${props => props.loading && 
     css`
        svg{
            animation: ${animate} 2s linear infinite
        }
     `}
`;

export const List = styled.ul`
    list-style: none;
    margin-top: 20px;

    li {
        padding: 15px 0px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        & + li {
            border-top: 1px solid gray}
    }
`;

export const DeleteButton = styled.button.attrs({
    type: 'button'
})`
    border: 0;
    background: transparent;
    margin-right: 10px;
    outline: 0;
    border-radius: 4px;
    

`