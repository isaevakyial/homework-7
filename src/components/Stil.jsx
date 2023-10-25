import React from "react";
import styled from "styled-components";

const StyledComponent = styled.div`
  color: ${(props) => (props.error ? "red" : "blue")};
  border: 2px solid red;
  width: 350px;
  height: 240px;
  text-align: center;
  margin-top: 20px;
`;

const secondStylesComponent = ({ error }) => {
  return (
    <StyledComponent error={error}>
      <h3>Условный компонент kyial</h3>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo pariatur,
         laborum laboriosam ad fugiat quam neque enim vero dolorum quidem reiciendis.
         Quisquam atque veniam impedit velit rem. Soluta, cum tempora?</p>
    </StyledComponent>
  );
};

export default secondStylesComponent;
