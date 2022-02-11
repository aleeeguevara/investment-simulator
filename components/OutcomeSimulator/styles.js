import styled from 'styled-components';

export const Container = styled.section`
  display: ${({ simulation }) => (simulation ? 'flex' : 'none')};
  flex-direction: column;
  margin: 0;

  @media(min-width: 900px){
    margin: 0;
  }

`;
export const Cards = styled.div`

  @media (min-width: 900px){
    display: flex;
    flex-wrap: wrap;
    margin-top: 1rem;
    width: 400px;
  }
  @media (min-width: 1100px){
    width: 600px;
  }
`;
export const Card = styled.div`
  background: #f4f4f4;
  box-shadow:  0 0 3px #626262;
  width: 150px;
  height: 50px;
  margin: 1rem auto;
  padding: 5px;

  @media (min-width: 900px){
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 13px;
  }

  h3{
    font-weight: 700;
    font-size: 12px;
    margin: 0;
    text-align: center;
  }
`;
export const Outcome = styled.p`
  color: ${({ green }) => (green ? '#3fa130' : 'inherit')};
  font-size: 12px;
  margin: 0;
  text-align: center;
`;
