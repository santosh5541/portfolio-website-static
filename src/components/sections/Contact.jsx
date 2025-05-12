import React, { useRef } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import EarthCanvas from "../canvas/Earth";

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  z-index: 1;
  align-items: center;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1350px;
  padding-bottom: 80px;
  gap: 12px;
  @media (max-width: 960px) {
    padding: 0 12px;
  }
`;

const Title = styled.h2`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    font-size: 32px;
    margin-top: 12px;
  }
`;

const Desc = styled.p`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
    margin-top: 12px;
  }
`;

const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: rgba(17, 25, 40, 0.83);
  border: 1px solid rgba(255, 255, 255, 0.125);
  padding: 32px;
  border-radius: 12px;
  box-shadow: rgba(23, 92, 230, 0.1) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`;

const ContactTitle = styled.h3`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const ContactInput = styled.input`
  padding: 12px 16px;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  background: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary}50;
  border-radius: 12px;
  outline: none;

  &:focus {
    border-color: ${({ theme }) => theme.primary};
  }
`;

const ContactTextArea = styled.textarea`
  padding: 12px 16px;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  background: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary}50;
  border-radius: 12px;
  outline: none;
  resize: vertical;

  &:focus {
    border-color: ${({ theme }) => theme.primary};
  }
`;

const ContactButton = styled.input`
  padding: 13px 16px;
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  background: linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  border: none;
  border-radius: 12px;
  cursor: pointer;
`;

const Contact = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_gu9disl",
        "template_7lfikt9",
        form.current,
        "ThuMsR5O_vwmL4J15"
      )
      .then(
        () => alert("Message sent!"),
        (err) => alert("Error: " + err.text)
      );
  };

  return (
    <Container id="Contact">
      <Wrapper>
        <EarthCanvas />
        <Title>Contact</Title>
        <Desc>
          Feel free to reach out to me for any questions or opportunities!
        </Desc>
        <ContactForm ref={form} onSubmit={handleSubmit}>
          <ContactTitle>Email Me 🚀</ContactTitle>
          <ContactInput type="email" placeholder="Your Email" name="from_email" required />
          <ContactInput type="text" placeholder="Your Name" name="from_name" required />
          <ContactInput type="text" placeholder="Subject" name="subject" />
          <ContactTextArea placeholder="Message" name="message" rows={4} required />
          <ContactButton type="submit" value="Send" />
        </ContactForm>
      </Wrapper>
    </Container>
  );
};

export default Contact;
