import validation from './validation';

describe('Validation Schema fields', () => {
  it('Fields filled', async () => {
    const data = {
      tipoRendimento: 'bruto',
      tipoIndexacao: 'pre',
      aporte: 'R$110,12',
      aporteMensal: 'R$122,43',
      prazo: '12',
      rentabilidade: '23%',
    };

    const result = await validation.validate(data);

    expect(result).toEqual(data);
  });
});
