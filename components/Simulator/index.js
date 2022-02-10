// 3rd parties
import { useFormik } from 'formik';
import { useState } from 'react';

// styles
import {
  Container, Btn, Form, Inputform, LabelForm,
  Tooltip, LabelTooltip, BtnLeft, BtnRight, SelectionBtn, Wrap, BtnCenter,
  Position, Error,
} from './styles';
import Validation from './validation';

const Simulator = function Formpage() {
  const [income, setIncome] = useState({
    gross: false,
    liquid: false,
  });
  const [indexingType, setIndexingType] = useState({
    pre: false,
    pos: false,
    fix: false,
  });

  const formik = useFormik(Validation);

  function maskMoney(moneyRaw) {
    let maskedValue = moneyRaw;
    maskedValue = maskedValue.replace(/\D/g, '');
    maskedValue = `R$${(maskedValue / 100).toFixed(2)}`;
    maskedValue = maskedValue.replace('.', ',');
    maskedValue = maskedValue.replace(/(\d)(\d{3})(\d{3}),/g, '$1.$2.$3,');
    maskedValue = maskedValue.replace(/(\d)(\d{3}),/g, '$1.$2,');

    return maskedValue;
  }

  return (
    <Container>
      <h2>Simulador</h2>
      <Form onSubmit={formik.handleSubmit}>
        <Wrap className="btnWrap">
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
            <BtnLeft
              type="button"
              active={income.gross}
              onClick={() => setIncome({ gross: true, liquid: false })}
            >
              Bruto
            </BtnLeft>

            <BtnRight
              type="button"
              active={income.liquid}
              onClick={() => setIncome({ gross: false, liquid: true })}
            >
              Líquido
            </BtnRight>
          </SelectionBtn>
        </Wrap>
        <Wrap className="btnWrap">
          <LabelTooltip>
            <p>Tipos de Indexação</p>
            <Tooltip>
              🛈
              <span>
                Indexador é o termo utilizado para se referir aos índices usados
                como base para corrigir os valores monetários de um determinado
                ativo. No Brasil, os indexadores mais comuns são o IPCA, a taxa
                Selic e o CDI.
              </span>
            </Tooltip>
          </LabelTooltip>

          <SelectionBtn>
            <BtnLeft
              type="button"
              active={indexingType.pre}
              onClick={() => setIndexingType(({
                pre: true, pos: false, fix: false,
              }))}
              threeOptions
            >
              PRÉ
            </BtnLeft>
            <BtnCenter
              type="button"
              active={indexingType.pos}
              onClick={() => setIndexingType(({
                pre: false, pos: true, fix: false,
              }))}
            >
              POS
            </BtnCenter>
            <BtnRight
              type="button"
              active={indexingType.fix}
              onClick={() => setIndexingType(({
                pre: false, pos: false, fix: true,
              }))}
              threeOptions
            >
              FIXADO
            </BtnRight>
          </SelectionBtn>
        </Wrap>
        <Wrap>
          <LabelForm
            touched={formik.touched.aporte}
            error={formik.errors.aporte}
          >

            Aporte Inicial
            <Inputform
              name="aporte"
              type="text"
              onChange={(e) => {
                formik.setFieldValue('aporte', maskMoney(e.target.value));
              }}
              onBlur={formik.handleBlur}
              value={formik.values.aporte}
              error={formik.errors.aporte}
              touched={formik.touched.aporte}
              readOnly={formik.isSubmitting}
            />
          </LabelForm>
          {formik.touched.aporte && formik.errors.aporte && (
            <Position>
              <Error>{formik.errors.aporte}</Error>
            </Position>
          )}
        </Wrap>
        <Wrap>
          <LabelForm
            touched={formik.touched.aporteMensal}
            error={formik.errors.aporteMensal}
          >
            Aporte Mensal
            <Inputform
              name="aporteMensal"
              type="text"
              onChange={(e) => {
                formik.setFieldValue('aporteMensal', maskMoney(e.target.value));
              }}
              onBlur={formik.handleBlur}
              value={formik.values.aporteMensal}
              error={formik.errors.aporteMensal}
              touched={formik.touched.aporteMensal}
              readOnly={formik.isSubmitting}
            />
          </LabelForm>
          {formik.touched.aporteMensal && formik.errors.aporteMensal && (
            <Position>
              <Error>{formik.errors.aporteMensal}</Error>
            </Position>
          )}
        </Wrap>
        <Wrap>
          <LabelForm
            touched={formik.touched.prazo}
            error={formik.errors.prazo}
          >
            Prazo (em meses)
            <Inputform
              name="prazo"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.prazo}
              error={formik.errors.prazo}
              touched={formik.touched.prazo}
              readOnly={formik.isSubmitting}
              mask="99"
            />
          </LabelForm>
          {formik.touched.prazo && formik.errors.prazo && (
            <Position>
              <Error>{formik.errors.prazo}</Error>
            </Position>
          )}
        </Wrap>
        <Wrap>
          <LabelForm
            touched={formik.touched.rentabilidade}
            error={formik.errors.rentabilidade}
          >
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
            <Position>
              <Error>{formik.errors.rentabilidade}</Error>
            </Position>
          )}
        </Wrap>
        <Wrap>
          <LabelForm
            touched={formik.touched.ipca}
            error={formik.errors.ipca}
          >
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
            <Position>
              <Error>{formik.errors.ipca}</Error>
            </Position>
          )}
        </Wrap>
        <Wrap>
          <LabelForm
            touched={formik.touched.cdi}
            error={formik.errors.cdi}
          >
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
            <Position>
              <Error>{formik.errors.cdi}</Error>
            </Position>
          )}
        </Wrap>
        <Wrap className="btnForm">
          <Btn
            type="button"
            clear
          >
            Limpar campos
          </Btn>
        </Wrap>
        <Wrap className="btnForm">
          <Btn
            disabled={formik.isSubmitting}
            type="submit"
            clear={false}
          >
            Simular
          </Btn>

        </Wrap>
      </Form>
    </Container>
  );
};
export default Simulator;
