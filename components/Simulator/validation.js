import * as Yup from 'yup';

export default Yup.object({
  tipoRendimento: Yup.string()
    .required('Tipo de Rendimento deve ser escolhido'),
  tipoIndexacao: Yup.string()
    .required('Tipo de Indexação deve ser preenchido'),
  aporte: Yup.string()
    .required('Aporte deve ser preenchido'),
  aporteMensal: Yup.string()
    .required('Aporte deve ser preenchido'),
  prazo: Yup.string()
    .required('Preencha o número'),
  rentabilidade: Yup.string()
    .required('Rentabilidade deve ser informada'),
});
