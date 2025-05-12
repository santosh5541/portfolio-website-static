import React, { useState } from "react";
import styled from "styled-components";

const Section = styled.section`
  padding: 80px 24px;
  background: ${({ theme }) => theme.bg_alt};
`;

// Heading styled like Education section
const Title = styled.h2`
  text-align: center;
  color: ${({ theme }) => theme.text_primary};
  font-size: 2.5rem;
  margin-bottom: 16px;
`;

const Subtitle = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};
  font-size: 1rem;
  max-width: 800px;
  margin: 0 auto 40px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 150px);
  justify-content: center;
  gap: 16px;
  margin: 0 auto 40px;
`;

const Card = styled.div`
  width: 150px;
  height: 150px;
  background: ${({ theme }) => theme.bg_card || '#1e1e2f'};
  border: 1px solid ${({ theme }) => theme.border || '#444'};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  transition: border-color 0.2s;
  &:hover {
    border-color: ${({ theme }) => theme.accent || '#007aff'};
  }
`;

const CardTitle = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.text_primary};
  font-size: 1rem;
`;

const Text = styled.p`
  max-width: 800px;
  margin: 0 auto 16px;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.6;
`;

const ModalBackdrop = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: #000;
  border: 1px solid #444;
  padding: 32px;
  border-radius: 8px;
  width: 90%;
  max-width: 600px;
  max-height: 80vh;
  overflow-y: auto;
  color: #fff;
  position: relative;
  font-family: 'Georgia', serif;
  line-height: 1.6;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #aaa;
`;

const posts = [
    {
      id: 1,
      title: 'REST API with Spring Boot',
      subtitle: 'Step-by-Step Tutorial',
      content: [
        `<strong>Introduction</strong><br/>Spring Boot simplifies RESTful web service development with auto-configuration. We'll build a CRUD API around a User entity to demonstrate common patterns.`,
        `<strong>Project Setup</strong><br/>Use <a href="https://start.spring.io" target="_blank" rel="noopener noreferrer">Spring Initializr</a>. Choose Java 17, Maven, and add Spring Web, Spring Data JPA, H2 Database. Unzip and open the project in your IDE.`,
        `<strong>Define the Entity</strong><br/><code>@Entity</code> class <code>User</code> with fields <code>id</code> (<code>@Id @GeneratedValue</code>), <code>name</code>, and <code>email</code>. Include getters, setters, and a no-args constructor.`,
        `<strong>Repository Layer</strong><br/>Interface <code>UserRepository extends JpaRepository&lt;User, Long&gt;</code> provides <code>findAll()</code>, <code>findById()</code>, <code>save()</code>, <code>deleteById()</code>.`,
        `<strong>Create the Controller</strong><br/><code>@RestController</code> mapped to <code>/api/users</code>. Inject <code>UserRepository</code>. Define:<ul><li><code>@GetMapping</code> – list users</li><li><code>@GetMapping("/{id}")</code> – get by ID</li><li><code>@PostMapping</code> – create user</li><li><code>@PutMapping("/{id}")</code> – update user</li><li><code>@DeleteMapping("/{id}")</code> – delete user</li></ul>Return <code>ResponseEntity</code> for proper HTTP status handling.`,
        `<strong>Run & Test</strong><br/>Run with <code>mvn spring-boot:run</code>. Test endpoints via Postman or <code>curl</code>: GET <code>/api/users</code>, POST <code>/api/users</code> with JSON. Access H2 console at <code>/h2-console</code> to inspect in-memory DB.`,
        `<strong>Next Steps</strong><br/>Add validation (<code>@Valid</code>, <code>@NotNull</code>), exception handling with <code>@ControllerAdvice</code>, and secure endpoints using Spring Security & JWT.`
      ]
    },
    {
        id: 2,
        title: 'Understanding Large Language Models (LLMs)',
        subtitle: 'Core Concepts and Applications',
        content: [
          `<strong>Overview</strong><br/>Large Language Models are transformer-based neural networks trained on massive text corpora to understand and generate human-like text. They leverage self-attention mechanisms to capture context.`,
          `<strong>Architecture</strong><br/>LLMs use layers of multi-head self-attention and position-wise feedforward networks, along with positional encodings to maintain token order.`,
          `<strong>Training Phases</strong><br/>Pre-training on diverse datasets teaches general language patterns; fine-tuning on domain-specific data adapts the model to particular tasks.`,
          `<strong>Applications</strong><br/>LLMs power chatbots, text summarization, translation, code generation, sentiment analysis, and more across industries like healthcare, finance, and education.`,
          `<strong>Challenges</strong><br/>Key challenges include computational cost, data bias, and hallucinations. Techniques like retrieval-augmented generation and model distillation help mitigate issues.`,
          `<strong>Future Directions</strong><br/>Ongoing research focuses on improving efficiency, reducing biases, and enhancing factual accuracy through hybrid systems combining retrieval and generation.`
        ]
      },
      {
        id: 3,
        title: 'Getting Started with Docker',
        subtitle: 'Containerization Basics',
        content: [
          `<strong>Introduction</strong><br/>Docker is a platform for packaging applications and their dependencies into portable containers. Containers ensure consistency across development, testing, and production environments.`,
          `<strong>Install Docker</strong><br/>Download Docker Desktop for Windows/Mac or install Docker Engine on Linux. Verify installation with <code>docker --version</code>.`,
          `<strong>Dockerfile</strong><br/>Create a <code>Dockerfile</code> in your project root. Example for a Node.js app:<br/><pre>FROM node:16-alpine
    WORKDIR /app
    COPY package*.json ./
    RUN npm install
    COPY . .
    CMD ["npm", "start"]</pre>`,
          `<strong>Build and Run</strong><br/>Build an image: <code>docker build -t myapp:latest .</code><br/>Run a container: <code>docker run -d -p 3000:3000 myapp:latest</code>.`,
          `<strong>Manage Containers</strong><br/>List containers: <code>docker ps</code><br/>Stop: <code>docker stop &lt;container_id&gt;</code><br/>Remove: <code>docker rm &lt;container_id&gt;</code>.`,
          `<strong>Next Steps</strong><br/>Explore Docker Compose for multi-container setups, and Docker Hub for image registries.`
        ]
      }
  ];

export default function BlogSection() {
  const [selected, setSelected] = useState(null);
  const open = post => setSelected(post);
  const close = () => setSelected(null);

  return (
    <Section id="Blog">
      <Title>Blog</Title>
      <Subtitle>Explore our latest articles and tutorials below</Subtitle>
      <Grid>
        {posts.map(post => (
          <Card key={post.id} onClick={() => open(post)}>
            <CardTitle>{post.title}</CardTitle>
          </Card>
        ))}
      </Grid>

      {selected && (
        <ModalBackdrop onClick={close}>
          <ModalContent onClick={e => e.stopPropagation()}>
            <CloseButton onClick={close}>×</CloseButton>
            <h2>{selected.title}</h2>
            <h4>{selected.subtitle}</h4>
            {selected.content.map((line, i) => (
              <Text key={i} dangerouslySetInnerHTML={{ __html: line }} />
            ))}
          </ModalContent>
        </ModalBackdrop>
      )}
    </Section>
  );
}
