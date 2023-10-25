import React, { useState } from 'react';
import styled from 'styled-components';

const LoginGoogleForm = () => {
  const [inputValues, setInputValues] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  const isValid = inputValues.email && inputValues.password;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {

      alert(`Email: ${inputValues.email}, Password: ${inputValues.password}`);
    }
  };
  

  return (
    <LoginForm onSubmit={handleSubmit}>
      <Input
        type="text"
        name="email"
        placeholder="Email"
        value={inputValues.email}
        onChange={handleInputChange}
        error={!isValid}
      />
      <Input
        type="password"
        name="password"
        placeholder="Password"
        value={inputValues.password}
        onChange={handleInputChange}
        error={!isValid}
      />
      <SubmitButton type="submit" disabled={!isValid}>
      Войти через Google
      </SubmitButton>
    </LoginForm>
  );
};

export default LoginGoogleForm;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: 0 auto;
`;

const Input = styled.input`
  margin: 5px 0;
  padding: 10px;
  border: 2px solid ${(props) => (props.error ? 'red' : 'blue')};
`;

const SubmitButton = styled.button`
  background-color: ${(props) => (props.disabled ? 'gray' : 'black')};
  color: white;
  padding: 10px;
  border: none;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`;
