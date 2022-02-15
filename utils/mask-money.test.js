// functions
import maskMoney from './mask-money';

describe('Function to mask money', () => {
  it('Masking money', () => {
    const newMask = maskMoney('1000');
    expect(newMask).toBe('R$10,00');
  });
});
