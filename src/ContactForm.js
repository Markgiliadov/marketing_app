import React from "react";
import styled from "styled-components";

const ContactFormWrapper = styled.section`
  text-align: center;
  padding: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormInput = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  width: 100%;
`;

const FormButton = styled.button`
  background-color: #3498db;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
`;

const ContactForm = () => {
  return (
    <ContactFormWrapper>
      <h2>Contact Us</h2>
      <Form>
        <FormInput type="text" placeholder="Your Name" required />
        <FormInput type="email" placeholder="Your Email" required />
        <FormInput type="tel" placeholder="Your Phone" required />
        <FormButton type="submit">Send</FormButton>
      </Form>
    </ContactFormWrapper>
  );
};

export default ContactForm;
