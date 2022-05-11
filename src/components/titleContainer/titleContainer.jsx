import { Container } from "./titleContainer.style";

export default function TitleContainer() {
  const date = new Date();

  return (
    <Container>
      <h1>ASK.DEMO</h1>

      <h3>Perguntas do dia {date.toLocaleDateString()}</h3>
    </Container>
  );
}
