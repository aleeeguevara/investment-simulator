// 3rd parties
import { PropTypes } from 'prop-types';
// styles
import {
  Container, Cards, Card, Outcome,
} from './styles';

const OutcomeSimulator = function OutcomeSection({ simulationData, simulation }) {
  return (
    <Container simulation={simulation}>
      <h2>Resultado da Simulação</h2>
      <Cards>
        <Card>
          <h3>Valor Final Bruto</h3>
          <Outcome>{simulationData?.valorFinalBruto}</Outcome>
        </Card>

        <Card>
          <h3>Aliquota do IR</h3>
          <Outcome>{simulationData?.aliquotaIR}</Outcome>
        </Card>

        <Card>
          <h3>Valor Pago em IR</h3>
          <Outcome>{simulationData?.valorPagoIR}</Outcome>
        </Card>

        <Card>
          <h3>Valor Final Líquido</h3>
          <Outcome green>{simulationData?.valorFinalLiquido}</Outcome>
        </Card>

        <Card>
          <h3>Valor Total Investido</h3>
          <Outcome>{simulationData?.valorTotalInvestido}</Outcome>
        </Card>

        <Card>
          <h3>Ganho Liquido</h3>
          <Outcome green>{simulationData?.ganhoLiquido}</Outcome>
        </Card>

      </Cards>
    </Container>
  );
};
OutcomeSimulator.propTypes = {
  simulation: PropTypes.bool.isRequired,
  simulationData: PropTypes.shape({
    valorFinalBruto: PropTypes.number.isRequired,
    aliquotaIR: PropTypes.number.isRequired,
    valorPagoIR: PropTypes.number.isRequired,
    valorFinalLiquido: PropTypes.number.isRequired,
    valorTotalInvestido: PropTypes.number.isRequired,
    ganhoLiquido: PropTypes.number.isRequired,
  }).isRequired,
};
export default OutcomeSimulator;
