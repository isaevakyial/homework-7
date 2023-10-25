import React from "react";
import styled from "styled-components";

const ResponsiveComponent = styled.div`
  font-size: 16px;
  border: 2px solid blue;
  width: 350px;
  height: 240px;
  margin-left: 370px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

const MyResponsiveComponent = () => {
  return (
    <ResponsiveComponent>
      <h2> Hi Alisher</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Ullam illum molestiae molestias voluptates animi atque, tenetur quis quod officia doloribus perferendis maiores accusantium,
         ipsam, praesentium necessitatibus placeat pariatur beatae aspernatur.</p>
    </ResponsiveComponent>
  );
};

export default MyResponsiveComponent;
