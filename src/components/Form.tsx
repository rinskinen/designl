import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

type FormData = {
  name: string;
  email: string;
  text: string;
};

const StyledForm = styled.form`
  width: 30%;
`;

const BasicInfo = styled.div`
  margin-bottom: 8px;
`;

const StyledLabel = styled.label`
  font-family: Quicksand;
  font-size: 24px;
  padding: 12px;
`;

const StyledInput = styled.input`
  font-family: Quicksand;
  font-size: 20px;
  padding: 2px;
  border-radius: 8px;
  border-width: 1px;
`;

const StyledTextArea = styled.textarea`
  font-family: Quicksand;
  font-size: 20px;
  padding: 2px;
  border-radius: 8px;
  border-width: 1px;
  margin: 12px;
`;

const StyledButton = styled.button`
  font-family: Quicksand;
  font-size: 24px;
  border-radius: 8px;
  padding: 8px;
  margin: 12px;
`;

export default function Form() {
  const { register, handleSubmit } = useForm<FormData>();
  const onSubmit = handleSubmit(({ name, email, text }) => {
    console.log(name, email, text);
  });

  return (
    <StyledForm onSubmit={onSubmit}>
      <BasicInfo>
        <StyledLabel>Etu- ja sukunimesi:</StyledLabel>
        <StyledInput name="name" ref={register} required />
        <br />
      </BasicInfo>
      <BasicInfo>
        <StyledLabel>Sähköpostiosoitteesi:</StyledLabel>
        <StyledInput name="email" ref={register} required />
        <br />
      </BasicInfo>
      <BasicInfo>
        <StyledLabel>Puhelinnumerosi:</StyledLabel>
        <StyledInput name="phoneNumber" ref={register} />
        <br />
      </BasicInfo>
      <StyledLabel>Kerro kuinka voin auttaa?</StyledLabel>
      <br />
      <StyledTextArea
        id="text"
        name="text"
        rows={12}
        cols={50}
        ref={register}
      />
      <br />
      <StyledButton type="button" onClick={onSubmit}>
        Lähetä
      </StyledButton>
    </StyledForm>
  );
}
