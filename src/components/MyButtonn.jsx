import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  height: 100%;
  width: 100%;


  &:hover {
    background-color: #0056b3;
  }

  &:active {
    background-color: #1c0080;
  }
`;

const MyButtonn = () => {
  return (
    <Button>
      <h2>Наведи и кликни меня</h2>
    </Button>
  );
};

export default MyButtonn;
