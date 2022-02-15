// 3rd parties
import { PropTypes } from 'prop-types';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  BarElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Container } from './styles';

const ChartComponent = function ChartSection({ chart1, chart2 }) {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  );

  const data = {
    labels: Object.keys(chart1),
    datasets: [
      {
        label: 'Sem Aporte',
        backgroundColor: 'black',
        data: Object.values(chart2),
        stack: 'a',
      },
      {
        label: 'Com Aporte',
        backgroundColor: '#ed8e53',
        data: Object.values(chart1),
        stack: 'a',
      },

    ],
  };
  const options = {
    options: {
      plugins: {
        title: {
          display: true,
          text: 'Projeção de Valores',
        },
      },
      responsive: true,
      scales: {
        x: {
          stacked: true,
        },
        y: {
          stacked: true,
        },
      },
    },
  };

  return (
    <Container>
      <Bar height={50} width={100} data={data} options={options} />
    </Container>
  );
};
ChartComponent.propTypes = {
  chart1: PropTypes.shape({
    graficoComAporte: PropTypes.number,
  }),
  chart2: PropTypes.shape({
    graficoSemAporte: PropTypes.number,
  }),
};

ChartComponent.defaultProps = {
  chart1: [{
    graficoComAporte: '',
  }],
  chart2: [{
    graficoComAporte: '',
  }],
};
export default ChartComponent;
