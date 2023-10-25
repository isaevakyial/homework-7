import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background-color: ${(props) => props.backgroundColor || "white"};
  padding: 16px;
  border: 1px solid #f70b0b;
  background-color: green;
  color: white;
  text-align: center;
  width: 100%;
  font-family: monospace, "Franklin Gothic Medium", "Arial Narrow", Arial,
    sans-serif;
  cursor: pointer;
  border-radius: 3px;
`;
const CardComponent = ({ backgroundColor }) => {
  return (
    <Card backgroundColor={backgroundColor}>
      <h1>Карточка</h1>
    </Card>
  );
};

export default CardComponent;
