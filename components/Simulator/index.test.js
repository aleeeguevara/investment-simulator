// 3rd parties
import {
  act, fireEvent, render, screen,
}
  from '@testing-library/react';
// components
import Simulator from './index';
import requisition from './requisition';

jest.mock('./requisition');

describe('Component simulator', () => {
  it('Add values before rendering the page', async () => {
    act(() => {
      requisition.getIndicators.mockResolvedValue([
        {
          nome: 'cdi',
          valor: 5,
        },
        {
          nome: 'ipca',
          valor: 12,
        },
      ]);
      render(<Simulator />);
    });

    expect(await screen.findByLabelText('IPCA (ao ano)')).toHaveValue(`${12}%`);
    expect(await screen.findByLabelText('CDI (ao ano)')).toHaveValue(`${5}%`);
  });

  it('The subtitle component', () => {
    act(() => {
      render(<Simulator />);
    });
    expect(screen.getByText('Simulador')).toBeInTheDocument();
  });

  it('The radio button gross onclick', () => {
    act(() => {
      render(<Simulator />);
    });
    const radioGross = screen.getByTestId('gross');
    const radioLiquid = screen.getByTestId('liquid');

    act(() => {
      fireEvent.click(radioGross);
    });
    expect(radioGross).toBeChecked();
    expect(radioLiquid).not.toBeChecked();
  });
});
