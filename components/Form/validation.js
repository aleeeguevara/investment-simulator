import * as Yup from 'yup';

export default {
  initialValues: {
    aporte: '',
    prazo: '',
    email: '',
    message: '',
  },
  validationSchema: Yup.object({
    aporte: Yup.string()
      .required('Aporte deve ser um número'),
    prazo: Yup.string()
      .required('Preencha o número'),
    ipca: Yup.string()
      .required('Preencha IPCA'),
  }),
  onSubmit: (values) => {
    alert(JSON.stringify(values, null, 2));
  },
};
