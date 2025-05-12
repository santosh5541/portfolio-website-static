// src/components/sections/BlogSection.jsx
import React from "react";
import styled from "styled-components";

const Section = styled.section`
  padding: 80px 24px;
  background: ${({ theme }) => theme.bg_alt};
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 48px;
  color: ${({ theme }) => theme.text_primary};
`;

const EmptyText = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};
  font-size: 1rem;
`;

export default function BlogSection() {
  return (
    <Section id="Blog">
      <Title>From the Blog</Title>
      <EmptyText>Hello</EmptyText>
    </Section>
  );
}
