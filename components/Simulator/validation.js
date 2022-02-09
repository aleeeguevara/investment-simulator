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
      .required('Aporte deve ser preenchido'),
    prazo: Yup.string()
      .required('Preencha o número'),
    aporteMensal: Yup.string()
      .required('Aporte deve ser preenchido'),
    rentabilidade: Yup.string()
      .required('Rentabilidade deve ser informada'),
  }),
  onSubmit: (values) => {
    alert(JSON.stringify(values, null, 2));
  },
};
