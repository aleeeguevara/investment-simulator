# Simulador de Investimentos

Front-end para Simulador de Investimentos.
Esta aplicação permite ao usuário simular rendimentos com resultados variando pela escolha do tipo de Rendimento e de Indexação

> Para desenvolver essa aplicação optei pela utilização do framework *NextJS*

* Escolhi o NextJS por ser uma tecnologia muito moderna para desenvolvimento React com  altos resultados de otimização de mecanismo de pesquisa (SEO).
* Utilizei o Formik e Yup são libs populares para construir e validar formulários de uma forma confiável.
* Fiz uso do React Input Mask para auxiliar na implementação de máscaras no formulário.
* Para testes unitários e de interação fiz uso do Jest que nos permite rodar testes de uma meneira eficiente.
* Trouxe a lib ChartJs para aplicar os gráficos do projeto, a sua utilização permite desenhar diversos gráficos com praticidade, o que a torna muito útil.
* Também tive o cuidado de instalar e configurar o Husky, com o commit lint e o lint staged para gerenciar os novos commits.
* Para estilização fiz uso do Styled Components por proporcionar de uma forma flexível e reutilizável a estilização de componentes.

## Stack
- NextJS
- Formik
- Yup
- React Input Mask
- Styled Components
- Jest
- ChartJs
- ESlint
- Commit lint
- Husky
- Prettier
- Standard version

## Como Executar Localmente

Clonar o repositório
```
git clone https://github.com/aleeeguevara/investment-simulator.git
```

Acessar o repositório
```
cd investment-simulator
```

Instalar as dependências do repositório

```
yarn install
```

Subir aplicação

```
yarn dev
```

## Como executar os testes

```
yarn test

```

## Rodar Cobertura de Testes

```
yarn test-cov
```

## Gerar nova release
```
yarn release
```
