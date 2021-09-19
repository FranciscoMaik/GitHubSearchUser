import styled, { css } from 'styled-components';

interface StyleProps{
    inputValue: boolean;
}

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Head = styled.div`
    display: flex;
    flex-direction: column;
    padding: 48px;
    width: 580px;
    border-radius: 8px;
    background: #4D4D4D;
    justify-content: center;
    align-items: center;
    margin-bottom: 48px;
    margin-top: 24px;
`;

export const Title = styled.p`  
    font-weight: bold;
    font-size: xx-large;
    color: #ffffff;
`; 

export const DivHeadAlign = styled.div`
    flex: 1;
    margin-top: 24px;
`;

export const Input = styled.input<StyleProps>`
    padding: 8px;
    width: 400px;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    border: 1px solid transparent;
    
    ${props => 
        props.inputValue && 
        css`
            border: 1px solid #ff0000;
        `
    }
`;

export const ButtonSearch = styled.button`
    padding: 8px;
    border-radius: 0px;
    border-bottom-right-radius: 4px;
    border-top-right-radius: 4px;
    background-color: #fcfcfc;
    cursor: pointer;
`;


export const Body = styled.div`
    display: flex;
    flex-direction: column;
    width: 580px;
    height: 480px;
    overflow-y: auto;
`; 