// 3rd parties
import InputMask from 'react-input-mask';
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1000px;

  .errorMsg{
    color: #e92929;
    font-weight: 400;
    font-size: 12px;
    margin-bottom: .5rem;
  }
`;

export const BtnLeft = styled.button`
  background: ${({ active }) => (!active ? '#ed8e53' : '#efefef')};
  border: 1px solid black;
  border-radius: 8px 0 0 8px;
  color: ${({ active }) => (!active ? 'white' : 'black')};
  font-size: 12px;
  height: 40px;
  margin-bottom: 1rem;
  padding-left: 0;
  width: 90px;

  @media (min-width: 768px){
    height: 50px;
    width: 90px;
  }
  :before{
    content: '✓';
    color: #efefef;

  }

`;

export const BtnRight = styled.button`
  background: ${({ active }) => (active ? '#ed8e53' : '#efefef')};
  border: 1px solid black;
  border-radius: 0 8px 8px 0;
  color: ${({ active }) => (active ? 'white' : 'black')};
  font-size: 12px;
  height: 40px;
  padding-left: 0;
  width: 90px;

  @media (min-width: 768px){
    height: 50px;
    width: 90px;
  }

  :before{
    content: '✓';
    color: #efefef;
  }


`;
export const LabelTooltip = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0;
  width: 180px;
  margin: .5rem 0;

  p{
    font-size: 12px;
    margin: 0;
    padding-top: .35rem;
  }
`;
export const Tooltip = styled.div`
  position: relative;
  margin: 0;

  :hover{
    span{
      visibility: visible;
    }
  }

  :active{
    span{
      visibility: visible;
    }
  }

  span{
    background-color: #b3b3b3;
    border-radius: 6px;
    color: black;
    text-align: left;
    font-size: 8px;
    left: 150%;
    padding: 5px 10px;
    position: absolute;
    text-align: left;
    top: 0px;
    visibility: hidden;
    width: 120px;
  }


`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

function isSuccess(touched) {
  return touched ? '#59c124;' : '#ccc';
}

function validationInput({ touched, error }) {
  return touched && error ? '#e92929' : isSuccess(touched);
}

export const Inputform = styled(InputMask)`
  background: #efefef;
  border: none;
  border-bottom: 1px solid ${validationInput};
  padding: .5rem;
  margin-bottom: .5rem;
`;
export const LabelForm = styled.label`
  font-size: 12px;
  font-weight: 500;
  width: 200px;

  &.gray-label{
    color: gray;
  }
`;

export const Btn = styled.button`
  width: 200px;
  padding: .6rem;
  font-weight: 600;
  background: ${({ clear }) => (clear ? '#969696' : 'inherit')};
  border-radius: 8px;

  @media (min-width: 768px){
    padding: .85rem;
  }
`;
