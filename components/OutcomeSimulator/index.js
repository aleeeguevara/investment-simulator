// 3rd parties
import { PropTypes } from 'prop-types';
import ChartComponent from '../Chart';
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
      <ChartComponent
        chart1={simulationData?.graficoComAporte}
        chart2={simulationData?.graficoSemAporte}
      />
    </Container>
  );
};

OutcomeSimulator.propTypes = {
  simulation: PropTypes.bool,
  simulationData: PropTypes.shape({
    graficoComAporte: PropTypes.number,
    graficoSemAporte: PropTypes.number,
    valorFinalBruto: PropTypes.number,
    aliquotaIR: PropTypes.number,
    valorPagoIR: PropTypes.number,
    valorFinalLiquido: PropTypes.number,
    valorTotalInvestido: PropTypes.number,
    ganhoLiquido: PropTypes.number,
  }),

};

OutcomeSimulator.defaultProps = {
  simulation: undefined,
  simulationData: [{
    valorFinalBruto: '',
    aliquotaIR: '',
    valorPagoIR: '',
    valorFinalLiquido: '',
    valorTotalInvestido: '',
    ganhoLiquido: '',
    graficoComAporte: '',
    graficoSemAporte: '',
  }],
};

export default OutcomeSimulator;
