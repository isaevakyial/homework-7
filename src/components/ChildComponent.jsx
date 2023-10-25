import React from "react";
import styled from "styled-components";

const Child = styled.div`
  color: ${(props) => props.textColor || "black"};
`;

const ChildComponent = ({ textColor }) => {
  return <Child textColor={textColor}>Дочерний компонент</Child>;
};

export default ChildComponent;
