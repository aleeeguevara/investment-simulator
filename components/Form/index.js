// 3rd parties
import { useFormik } from 'formik';
import { useState } from 'react';

// styles

import {
  Container, Btn, Form, Inputform, LabelForm,
  Tooltip, LabelTooltip, BtnLeft, BtnRight,
} from './styles';
import Validation from './validation';

const FormContact = function Formpage() {
  const [active, setActive] = useState(false);
  const formik = useFormik(Validation);

  return (
    <Container>
      <h2>Simulador</h2>
      <LabelTooltip>
        <p>Rendimento</p>
        <Tooltip>
          🛈
          <span>
            O rendimento brut é o resultado sem nenhum tipo de desconto,
            nem de taxas, nem de impostos. Já o rendimento líquido é
            esse mesmo resultado, descontando taxas ou impostos.
          </span>
        </Tooltip>
      </LabelTooltip>
      <BtnLeft type="button" active={active} onClick={() => setActive(false)}>Bruto</BtnLeft>
      <BtnRight type="button" active={active} onClick={() => setActive(true)}>Líquido</BtnRight>
      <Form onSubmit={formik.handleSubmit}>
        <LabelForm className="gray-label">
          Aporte Inicial
          <Inputform
            name="aporte"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.aporte}
            error={formik.errors.aporte}
            touched={formik.touched.aporte}
            readOnly={formik.isSubmitting}
            mask="R$ 9.999,999"
          />
        </LabelForm>
        {formik.touched.aporte && formik.errors.aporte && (
          <div className="errorMsg">{formik.errors.aporte}</div>
        )}
        <LabelForm>
          Prazo (em meses)
          <Inputform
            name="prazo"
            type="number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.prazo}
            error={formik.errors.prazo}
            touched={formik.touched.prazo}
            readOnly={formik.isSubmitting}
            maxLength={2}
          />
        </LabelForm>
        {formik.touched.prazo && formik.errors.prazo && (
          <div className="errorMsg">{formik.errors.prazo}</div>
        )}
        <LabelForm>
          IPCA (ano ano)
          <Inputform
            name="ipca"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.ipca}
            error={formik.errors.ipca}
            touched={formik.touched.ipca}
            readOnly={formik.isSubmitting}
            maxLength={10}
          />
        </LabelForm>
        {formik.touched.ipca && formik.errors.ipca && (
          <div className="errorMsg">{formik.errors.ipca}</div>
        )}
        <Btn
          type="button"
          clear={false}
        >
          Limpar Campos
        </Btn>
        <Btn
          disabled={formik.isSubmitting}
          type="submit"
          clear
        >
          Simular
        </Btn>
      </Form>
    </Container>
  );
};
export default FormContact;
