// 3rd parties
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import OutcomeSimulator from '../OutcomeSimulator';
// functions
import { getIndicators, getSimulations } from './requisition';
import maskMoney from '../../utils/mask-money';
// styles
import {
  Container, Btn, Form, Inputform, LabelForm,
  Tooltip, LabelTooltip, BtnLeft, BtnRight, SelectionBtn, Wrap, BtnCenter,
  Position, Error,
} from './styles';
import Validation from './validation';

const Simulator = function Formpage() {
  const [data, setData] = useState(undefined);
  const [income, setIncome] = useState({
    gross: false,
    liquid: false,
  });
  const [indexingType, setIndexingType] = useState({
    pre: false,
    pos: false,
    fix: false,
  });

  const [simulationData, setSimulationData] = useState(undefined);
  const [simulation, setSimulation] = useState(false);

  const formik = useFormik({
    initialValues: {
      tipoRendimento: '',
      tipoIndexacao: '',
      aporte: '',
      aporteMensal: '',
      prazo: '',
      rentabilidade: '',
    },
    validationSchema: Validation,
    onSubmit: async (values) => {
      const inputValues = values;
      const simulatorsResult = await getSimulations();

      const result = simulatorsResult.filter((item) => item.tipoRendimento
      === inputValues.tipoRendimento
      && item.tipoIndexacao === inputValues.tipoIndexacao);

      const [dataReturned] = result;

      const dataParsed = {
        valorFinalBruto: dataReturned.valorFinalBruto,
        aliquotaIR: dataReturned.aliquotaIR,
        valorPagoIR: dataReturned.valorPagoIR,
        valorFinalLiquido: dataReturned.valorFinalLiquido,
        valorTotalInvestido: dataReturned.valorTotalInvestido,
        ganhoLiquido: dataReturned.ganhoLiquido,
      };

      setSimulationData(dataParsed);
      setSimulation(true);
    },
  });

  useEffect(() => {
    (async () => {
      try {
        const result = await getIndicators();

        const resultParsed = {
          ipca: result.filter((value) => value.nome === 'ipca')[0].valor,
          cdi: result.filter((value) => value.nome === 'cdi')[0].valor,
        };

        setData(resultParsed);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <div className="flex">
      <Container simulation={simulation}>
        <h2>Simulador</h2>
        <Form onSubmit={formik.handleSubmit}>
          <Wrap>
            <div className="btnWrap">
              <LabelTooltip>
                <p>Rendimento</p>
                <Tooltip>
                  🛈
                  <span>
                    O rendimento bruto é o resultado sem nenhum tipo de desconto,
                    nem de taxas, nem de impostos. Já o rendimento líquido é
                    esse mesmo resultado, descontando taxas ou impostos.
                  </span>
                </Tooltip>
              </LabelTooltip>
              <SelectionBtn>
                <BtnLeft
                  type="radio"
                  active={income.gross}
                  onClick={() => {
                    setIncome({ gross: true, liquid: false });

                    formik.setFieldValue('tipoRendimento', 'bruto');
                  }}
                  name="tipoRendimento"
                  readOnly={formik.isSubmitting}
                  error={formik.errors.tipoRendimento}
                  touched={formik.touched.tipoRendimento}
                  className="gross"
                  data-testid="gross"
                />

                <BtnRight
                  type="radio"
                  active={income.liquid}
                  onClick={() => {
                    setIncome({ gross: false, liquid: true });

                    formik.setFieldValue('tipoRendimento', 'liquido');
                  }}
                  name="tipoRendimento"
                  readOnly={formik.isSubmitting}
                  error={formik.errors.tipoRendimento}
                  touched={formik.touched.tipoRendimento}
                  threeOptions={false}
                  className="liquido"
                  data-testid="liquid"
                />
              </SelectionBtn>
            </div>
            {formik.touched.tipoRendimento && formik.errors.tipoRendimento && (
              <Position>
                <Error>{formik.errors.tipoRendimento}</Error>
              </Position>
            )}
          </Wrap>

          <Wrap>
            <div className="btnWrap">
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
                  type="radio"
                  active={indexingType.pre}
                  onClick={() => {
                    setIndexingType(({ pre: true, pos: false, fix: false }));

                    formik.setFieldValue('tipoIndexacao', 'pre');
                  }}
                  threeOptions
                  name="tipoIndexacao"
                  readOnly={formik.isSubmitting}
                  error={formik.errors.tipoIndexacao}
                  touched={formik.touched.tipoIndexacao}
                />
                <BtnCenter
                  type="radio"
                  active={indexingType.pos}
                  onClick={() => {
                    setIndexingType(({ pre: false, pos: true, fix: false }));

                    formik.setFieldValue('tipoIndexacao', 'pos');
                  }}
                  name="tipoIndexacao"
                  readOnly={formik.isSubmitting}
                  error={formik.errors.tipoIndexacao}
                  touched={formik.touched.tipoIndexacao}
                />
                <BtnRight
                  type="radio"
                  active={indexingType.fix}
                  onClick={() => {
                    setIndexingType(({ pre: false, pos: false, fix: true }));

                    formik.setFieldValue('tipoIndexacao', 'ipca');
                  }}
                  threeOptions
                  name="tipoIndexacao"
                  readOnly={formik.isSubmitting}
                  error={formik.errors.tipoIndexacao}
                  touched={formik.touched.tipoIndexacao}
                />
              </SelectionBtn>
            </div>
            {formik.touched.tipoIndexacao && formik.errors.tipoIndexacao && (
              <Position>
                <Error>{formik.errors.tipoIndexacao}</Error>
              </Position>
            )}
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
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={data ? `${data?.ipca}%` : ''}
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
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={data ? `${data?.cdi}%` : ''}
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
              onClick={() => {
                formik.resetForm();

                setIncome(false);
                setIndexingType(false);
                setSimulation(false);
              }}
            >
              Limpar campos
            </Btn>
          </Wrap>
          <Wrap className="btnForm">
            <Btn
              filled={formik.isValid && formik.dirty}
              disabled={formik.isSubmitting}
              type="submit"
              clear={false}
            >
              Simular
            </Btn>

          </Wrap>
        </Form>
      </Container>

      {simulation
      && (
        <>
          <OutcomeSimulator simulationData={simulationData} />
          <Btn
            type="button"
            onClick={() => {
              formik.resetForm();
              setIncome(false);
              setIndexingType(false);
              setSimulation(false);
            }}
            className="newSimulation"
          >
            Nova Simulação
          </Btn>
        </>
      )}
    </div>
  );
};
export default Simulator;
