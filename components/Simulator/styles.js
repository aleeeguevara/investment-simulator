// 3rd parties
import InputMask from 'react-input-mask';
import styled from 'styled-components';

export const Container = styled.section`
  margin: 0 auto;
  width: 200px;
  display: ${({ simulation }) => (simulation ? 'none' : 'initial')};

  @media(min-width: 900px){
    width: 450px;
    margin: 0;
  }

  .btnWrap{
    margin: 0 1rem;
    flex-direction: column;
    margin-left: 0;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  background: #f1f1f1;
  padding: 0 0 0 1rem;
  align-items: center;
  border-radius: 10px;

  @media (min-width: 900px){
    flex-direction: row;
    border: 1px solid #efefef;
    justify-content: center;
    border-radius: 10px;
    padding: 1rem 0;
  }
`;

export const Wrap = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: .5rem 0%;

    &.btnForm{
      margin-right: 1.3rem;
    }
`;

function selected({ active }) {
  return active ? 'fff' : 'black';
}

export const BtnLeft = styled.input`
  background: ${({ active }) => (active ? '#ed8e53' : '#fff')};
  //border: 1px solid #b1b1b1;
  box-shadow: 0 0 3px #626262;
  border-radius: 8px 0 0 8px;
  color: ${({ active }) => (active ? 'white' : 'black')};
  cursor: pointer;
  font-size: 12px;
  height: 40px;
  margin-bottom: 1rem;
  padding-left: 0;
  width: ${({ threeOptions }) => (threeOptions ? '60px' : '90px')};
  appearance: none;
  margin: 0;
  padding: ${({ threeOptions }) => (threeOptions ? '10px' : '10px 15px')};;

  :before{
    content: '✓';
    color: #fff;

  }
  :after{
    content:'PRE';
    color: ${selected};
  }

  &.gross{
    :after{
      content:'BRUTO';
    }
  }
`;

export const BtnCenter = styled.input`
  background: ${({ active }) => (active ? '#ed8e53' : '#fff')};
  //border: 1px solid #b1b1b1;
  box-shadow: 0 0 3px #626262;
  color: ${({ active }) => (active ? 'white' : 'black')};
  cursor: pointer;
  font-size: 12px;
  height: 40px;
  margin-bottom: 1rem;
  padding-left: 0;
  width: 60px;
  appearance: none;
  margin: 0;
  padding: 10px;

  :before{
    content: '✓';
    color: #fff;
  }

  :after{
    content:'POS';
    color: ${selected};
  }
`;

export const BtnRight = styled.input`
  background: ${({ active }) => (active ? '#ed8e53' : '#fff')};;
  //border: 1px solid #b1b1b1;
  box-shadow: 0 0 3px #626262;
  border-radius: 0 8px 8px 0;
  color: ${({ active }) => (active ? 'white' : 'black')};
  cursor: pointer;
  font-size: 12px;
  height: 40px;
  padding-left: 0;
  width: ${({ threeOptions }) => (threeOptions ? '60px' : '90px')};
  appearance: none;
  margin: 0;
  padding: ${({ threeOptions }) => (threeOptions ? '10px 0' : '10px')};

  :before{
    content: '✓';
    color: #fff;
  }

  :after{
    content:'FIXADO';
    color: ${selected};
  }

  &.liquido{
    :after{
      content:'LIQUIDO';
    }
  }
`;

export const SelectionBtn = styled.div`
  display: flex;
  margin: 0;
  padding: 0;
  margin-bottom: 1rem;

  &.space{
    flex-direction: column;
    display: flex;
    margin: 0 auto;
    @media (min-width: 900px){
      flex-direction: row;
      justify-content: left;
    }
  }
`;

export const LabelTooltip = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0;
  width: 180px;
  margin: .5rem 0;
  padding: 0;

  p{
    font-size: 12px;
    margin: 0;
    padding-top: .35rem;
  }
`;

export const Tooltip = styled.div`
  position: relative;
  margin: 0;
  padding: 0;
  cursor: help;

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
    right: -45px;
    padding: 5px 10px;
    position: absolute;
    text-align: left;
    top: -60px;
    visibility: hidden;
    width: 120px;

    @media(min-width: 900px){
      top: 0px;
      left: 150%;
    }
  }

`;

function validationInput({ touched, error }) {
  return touched && error ? '#e92929' : '#b1b1b1';
}
function validationLabel({ touched, error }) {
  return touched && error ? '#e92929' : 'black';
}

export const Inputform = styled(InputMask)`
  background: #fff;
  border: 1px solid #efefef;
  border-bottom: 2px solid ${validationInput};
  border-radius: 6px;
  padding: .5rem;
  margin-bottom: 1rem;

  &:focus{
    outline: none;
  }

`;
export const LabelForm = styled.label`
  color: ${validationLabel};
  display: block;
  font-size: 12px;
  font-weight: 500;
  width: 200px;

  &.gray-label{
    color: gray;
  }
`;

export const Position = styled.div`
  position: relative;
  margin: 0;
`;

export const Error = styled.div`
  color: #e92929;
  font-size: 10px;
  position: absolute;
  bottom: 4px;
  left: -200px;
  margin: 0;
`;

function formFilled({ filled }) {
  return filled ? '#ed8e53' : '#969696';
}

export const Btn = styled.button`
  background: ${({ clear }) => (clear ? 'inherit' : formFilled)};
  border-radius: 8px;
  border: ${({ clear }) => (clear ? '1px solid #969696' : 'none')};
  font-weight: 600;
  padding: .6rem;
  margin: .5rem 0;
  width: 180px;
  align-self: center;
  cursor: pointer;

  :hover{
    background: ${({ clear }) => (clear ? '#ed8e53' : '#ffff')};
    border: ${({ clear }) => (clear ? '1px solid #f1f1f1' : '1px solid #ed8e53')};
    color: ${({ clear }) => (clear ? '#fff' : 'black')};
  }

  @media (min-width: 900px){
    padding: .85rem;
    margin: 0;
  }

  &.filled{
    background: ${formFilled};
  }

  &.newSimulation{
    background: #ed8e53;
    text-transform: uppercase;
    margin: 1rem 0;
    :hover{
      border: 1px solid #ed8e53;
      background: #fff;
    }
  }
`;
