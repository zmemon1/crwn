import styled from 'styled-components';

export const ButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  line-height: 50px;
  padding: 0 20px 0 20px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`

export const GoogleSignIn = styled(ButtonContainer)`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    border: none;
    color: white;
  }
`

export const Inverted = styled(ButtonContainer)`
  background-color: white;
  color: black;
  border: 1px solid black;
  
  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`