import styled from 'styled-components'


export const ExampleButton = styled.button`
    background:${props => props.primary ? "red" : "white"};
    color:${props => props.primary ? "violet" : "red"};
    font-size:1rem;
    border-radius: 50%;
    width: 5rem;
    height:5rem;
    border: none;
`