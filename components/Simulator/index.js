// 3rd parties
import { useFormik } from 'formik';
import { useState } from 'react';

// styles
import {
  Container, Btn, Form, Inputform, LabelForm,
  Tooltip, LabelTooltip, BtnLeft, BtnRight, SelectionBtn, Wrap, BtnCenter,
} from './styles';
import Validation from './validation';

const FormContact = function Formpage() {
  const [active, setActive] = useState(false);

  const formik = useFormik(Validation);

  return (
    <Container>
      <h2>Simulador</h2>
      <Form onSubmit={formik.handleSubmit}>
        <Wrap>
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
          <SelectionBtn>
            <BtnLeft type="button" active={active} onClick={() => setActive(false)}>Bruto</BtnLeft>
            <BtnRight type="button" active={active} onClick={() => setActive(true)}>Líquido</BtnRight>
          </SelectionBtn>
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
              maskPlaceholder={null}
              mask="R$9.999,999"
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
            IPCA (ao ano)
            <Inputform
              name="ipca"
              type="number"
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
        </Wrap>
        <Wrap>
          <LabelTooltip>
            <p>Tipos de Indexação</p>
            <Tooltip>
              🛈
              <span>
                O rendimento brut é o resultado sem nenhum tipo de desconto,
                nem de taxas, nem de impostos. Já o rendimento líquido é
                esse mesmo resultado, descontando taxas ou impostos.
              </span>
            </Tooltip>
          </LabelTooltip>

          <SelectionBtn>
            <BtnLeft checked>PRÉ</BtnLeft>
            <BtnCenter checked>POS</BtnCenter>
            <BtnRight checked>FIXADO</BtnRight>
          </SelectionBtn>

          <LabelForm>
            Aporte Mensal
            <Inputform
              name="aporteMensal"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.aporteMensal}
              error={formik.errors.aporteMensal}
              touched={formik.touched.aporteMensal}
              readOnly={formik.isSubmitting}
              mask="R$ 9.999,999"
            />
          </LabelForm>
          {formik.touched.aporteMensal && formik.errors.aporteMensal && (
            <div className="errorMsg">{formik.errors.aporteMensal}</div>
          )}

          <LabelForm>
            Rentabilidade
            <Inputform
              name="rentabilidade"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.rentabilidade}
              error={formik.errors.rentabilidade}
              touched={formik.touched.rentabilidade}
              readOnly={formik.isSubmitting}
              mask="99%"
            />
          </LabelForm>
          {formik.touched.rentabilidade && formik.errors.rentabilidade && (
            <div className="errorMsg">{formik.errors.rentabilidade}</div>
          )}

          <LabelForm>
            CDI (ao ano)
            <Inputform
              name="cdi"
              type="number"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.cdi}
              error={formik.errors.cdi}
              touched={formik.touched.cdi}
              readOnly={formik.isSubmitting}
              maxLength={10}
            />
          </LabelForm>
          {formik.touched.cdi && formik.errors.cdi && (
            <div className="errorMsg">{formik.errors.cdi}</div>
          )}
        </Wrap>
      </Form>

      <SelectionBtn className="space">
        <Btn
          type="button"
          clear
        >
          Limpar campos
        </Btn>
        <Btn
          disabled={formik.isSubmitting}
          type="submit"
          clear={false}
        >
          Simular
        </Btn>
      </SelectionBtn>
    </Container>
  );
};
export default FormContact;
