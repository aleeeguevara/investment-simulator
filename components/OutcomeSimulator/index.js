// styles
import {
  Container, Cards, Card, Outcome,
} from './styles';

const OutcomeSimulator = function OutcomeSection() {
  return (
    <Container>
      <h2>Resultado da Simulação</h2>
      <Cards>
        <Card>
          <h3>Valor Final Bruto</h3>
          <Outcome>12</Outcome>
        </Card>

        <Card>
          <h3>Aliquota do IR</h3>
          <Outcome>12</Outcome>
        </Card>

        <Card>
          <h3>Valor Pago em IR</h3>
          <Outcome>12</Outcome>
        </Card>

        <Card>
          <h3>Valor Final Líquido</h3>
          <Outcome green>12</Outcome>
        </Card>

        <Card>
          <h3>Valor Total Investido</h3>
          <Outcome>12</Outcome>
        </Card>

        <Card>
          <h3>Ganho Liquido</h3>
          <Outcome green>12</Outcome>
        </Card>

      </Cards>
    </Container>
  );
};
export default OutcomeSimulator;
