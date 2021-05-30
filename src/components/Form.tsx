import React from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form';

const StyledForm = styled.form`
  @media (min-width: 320px) {
    width: 100%;
  }

  @media (min-width: 1200px) {
    width: 60%;
  }
  padding-bottom: 100px;
`;

const BasicInfo = styled.div`
  display: flex;

  margin-bottom: 14px;
  @media (min-width: 320px) {
    flex-direction: column;
  }

  @media (min-width: 1200px) {
    flex-direction: row;
  }
`;

const StyledLabel = styled.label`
  display: flex;
  font-size: 24px;

  @media (min-width: 320px) {
    padding-bottom: 12px;
  }

  @media (min-width: 1200px) {
    padding: 12px;
  }
`;

const StyledInput = styled.input`
  font-family: Quicksand;
  font-size: 20px;
  padding: 8px;
  border-width: 1px;
  flex-grow: 2;
`;

const StyledTextAreaDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledTextArea = styled.textarea`
  font-family: Quicksand;
  font-size: 20px;
  padding: 8px;
  border-width: 1px;
  margin-top: 8px;
  flex-grow: 3;

  @media (min-width: 1200px) {
    margin-left: 12px;
  }
`;

const StyledInfo = styled.div`
  padding-left: 12px;
`;

const StyledButton = styled.button`
  font-family: Quicksand;
  font-size: 24px;
  border-radius: 8px;
  padding: 8px;
  margin: 12px;
`;

export default function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const sendMessage = () => {
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID || '',
        process.env.REACT_APP_TEMPLATE_ID || '',
        '#contactForm',
        process.env.REACT_APP_USER_ID,
      )
      .then(() => {
        alert('Viestisi lähetetty, kiitos!');
        reset();
      })
      .catch((error) =>
        alert(
          'Valitettavasti jotain meni pieleen, lähetäthän uuden viestin. Voit olla minuun myös suoraan yhteydessä sähköpostitse tai puhelimitse. Yhteystiedot löytyvät sivun alalaidasta.',
        ),
      );
  };

  return (
    <StyledForm onSubmit={handleSubmit(sendMessage)} id="contactForm">
      <BasicInfo>
        <StyledLabel>Etu- ja sukunimesi: *</StyledLabel>
        <StyledInput {...register('name', { required: true })} />
        <br />
      </BasicInfo>
      <BasicInfo>
        <StyledLabel>Sähköpostiosoitteesi: **</StyledLabel>
        <StyledInput
          {...register('email', {
            required: true,
            pattern: /^\S+@\S+\.\S/,
          })}
        />
        <br />
      </BasicInfo>
      <BasicInfo>
        <StyledLabel>Puhelinnumerosi:</StyledLabel>
        <StyledInput {...register('phoneNumber')} />
        <br />
      </BasicInfo>
      <StyledLabel>Viestisi: </StyledLabel>
      <br />
      <StyledTextAreaDiv>
        <StyledTextArea {...register('text')} rows={12} cols={50} />
      </StyledTextAreaDiv>
      <StyledInfo>
        {errors.name && <p>* syötäthän nimesi</p>}
        {errors.email && (
          <p>
            ** syötäthän sähköpostiosoitteesi oikeassa muodossa, jotta
            voin vastata yhteydenottoosi
          </p>
        )}
      </StyledInfo>
      <br />
      <StyledButton type="submit" value="Send">
        Lähetä
      </StyledButton>
    </StyledForm>
  );
}
