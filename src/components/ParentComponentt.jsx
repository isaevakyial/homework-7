import React from "react";
import styled from "styled-components";
import ChildComponentt from "./ChildComponent";

const Parent = styled.div`
  background-color: #a8ca20;
  padding: 20px;
  border:2px solid purple;
  width:350px;
  height:240px;
  text-align:center;
`;

const ParentComponentt = () => {
  const textColor = "red";

  return (
    <Parent>
      <ChildComponentt textColor={textColor}>
        <h2>Дочерний компонент</h2>
      </ChildComponentt>
    </Parent>
  );
};

export default ParentComponentt;
