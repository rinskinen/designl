import React from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';

const StyledForm = styled.form`
  width: 25%;
`;

const BasicInfo = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 14px;
`;

const StyledLabel = styled.label`
  font-family: Quicksand;
  font-size: 24px;
  padding: 12px;
`;

const StyledInput = styled.input`
  font-family: Quicksand;
  font-size: 20px;
  padding: 4px;
  border-radius: 8px;
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
  border-radius: 8px;
  border-width: 1px;
  margin-left: 12px;
  margin-top: 8px;
  flex-grow: 3;
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
  const sendMessage = (event: any) => {
    event.preventDefault();

    emailjs
      .sendForm(
        process.env.SERVICE_ID || '',
        process.env.TEMPLATE_ID || '',
        event.target,
        process.env.USER_ID,
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Viestisi lähetetty, kiitos!');
        },
        (error) => {
          console.log(error.text);
        },
      );
  };

  return (
    <StyledForm onSubmit={sendMessage}>
      <BasicInfo>
        <StyledLabel>Etu- ja sukunimesi: *</StyledLabel>
        <StyledInput name="name" required />
        <br />
      </BasicInfo>
      <BasicInfo>
        <StyledLabel>Sähköpostiosoitteesi: *</StyledLabel>
        <StyledInput name="email" required />
        <br />
      </BasicInfo>
      <BasicInfo>
        <StyledLabel>Puhelinnumerosi:</StyledLabel>
        <StyledInput name="phoneNumber" />
        <br />
      </BasicInfo>
      <StyledLabel>Viestisi: </StyledLabel>
      <br />
      <StyledTextAreaDiv>
        <StyledTextArea id="text" name="text" rows={12} cols={50} />
      </StyledTextAreaDiv>
      <StyledInfo>
        <p>* pakolliset tiedot</p>
      </StyledInfo>
      <br />
      <StyledButton type="submit" value="Send">
        Lähetä
      </StyledButton>
    </StyledForm>
  );
}
