// 3rd parties
import { render, act } from '@testing-library/react';
import OutcomeSimulator from '.';

describe('Component of outcome from simulation', () => {
  it('The components snapshot should remain always the same', () => {
    act(() => {
      const { container } = render(<OutcomeSimulator
        true
        valorFinalBruto="2048.09"
        aliquotaIR="0"
        valorPagoIR="0"
        valorFinalLiquido="2048.09"
        valorTotalInvestido="1000"
        ganhoLiquido="1048.08"

      />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
