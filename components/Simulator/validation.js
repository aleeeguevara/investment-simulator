import * as Yup from 'yup';

export default {
  initialValues: {
    aporte: '',
    prazo: '',
    aporteMensal: '',
    rentabilidade: '',
  },
  validationSchema: Yup.object({
    aporte: Yup.string()
      .required('Aporte deve ser um número'),
    prazo: Yup.string()
      .required('Preencha o número'),
    aporteMensal: Yup.string()
      .required('Aporte deve ser um número'),
    rentabilidade: Yup.string()
      .required('Rentabilidade deve ser informada'),
  }),
  onSubmit: (values) => {
    alert(JSON.stringify(values, null, 2));
  },
};
