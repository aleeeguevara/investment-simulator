export default function maskMoney(moneyRaw) {
  let maskedValue = moneyRaw;
  maskedValue = maskedValue.replace(/\D/g, '');
  maskedValue = `R$${(maskedValue / 100).toFixed(2)}`;
  maskedValue = maskedValue.replace('.', ',');
  maskedValue = maskedValue.replace(/(\d)(\d{3})(\d{3}),/g, '$1.$2.$3,');
  maskedValue = maskedValue.replace(/(\d)(\d{3}),/g, '$1.$2,');

  return maskedValue;
}
