import styled from "styled-components";

const Button = styled.button`
  background-color: ${props => props.bgcolor || "transparent"};;
  border: none;
  border-radius: ${props => props.radius || "3px"};;
  box-shadow: ${props => props.shadow || "0 0 3px 1px rgb(220, 220, 220)"};
  margin: ${props => props.margin || "0"};;
  padding: ${props => props.padding  || "0.5rem 2rem"};;
  color: ${props => props.color || "grey"};
  font-size: ${props => props.size  || "1rem"};
`;

const IconButton = styled.button`
  background-color: transparent;
  border: none;
`;

export { Button, IconButton };
