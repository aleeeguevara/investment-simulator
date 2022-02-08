// 3rd parties
import InputMask from 'react-input-mask';
import styled from 'styled-components';

export const Container = styled.section`
  margin: 0 auto;
  width: 200px;
  @media(min-width: 620px){
    width: 500px;
    margin: 0;
  }

  .errorMsg{
    color: #e92929;
    font-weight: 400;
    font-size: 12px;
    padding-bottom: .5rem;
    margin: 0;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;

  @media (min-width: 620px){
    flex-direction: row;
    flex-wrap: nowrap;
  }
`;

export const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin: 0 1rem;
    width: 50%;
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
  width: ${({ threeOptions }) => (!threeOptions ? '90px' : '60px')};

  @media (min-width: 620px){
    height: 47px;
    width: ${({ threeOptions }) => (!threeOptions ? '89px' : '66px')};
  }
  :before{
    content: '✓';
    color: #efefef;

  }
`;

export const BtnCenter = styled.button`
  background: ${({ active }) => (!active ? '#ed8e53' : '#efefef')};
  border: 1px solid black;

  color: ${({ active }) => (!active ? 'white' : 'black')};
  font-size: 12px;
  height: 40px;
  margin-bottom: 1rem;
  padding-left: 0;
  width: 60px;

  @media (min-width: 620px){
    height: 47px;
    width: 66px;
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
  width: ${({ threeOptions }) => (!threeOptions ? '90px' : '60px')};

  @media (min-width: 620px){
    height: 47px;
    width: ${({ threeOptions }) => (!threeOptions ? '89px' : '66px')};
  }

  :before{
    content: '✓';
    color: #efefef;
  }
`;

export const SelectionBtn = styled.div`
  display: flex;
  margin: 0;

  &.space{
    flex-direction: column;
    display: flex;
    margin: 0 auto;
    @media (min-width: 620px){
      flex-direction: row;
      justify-content: space-evenly;
    }
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
    right: -45px;
    padding: 5px 10px;
    position: absolute;
    text-align: left;
    top: -60px;
    visibility: hidden;
    width: 120px;

    @media(min-width: 620px){
      top: 0px;
      left: 150%;
    }
  }

`;

function isSuccess(touched) {
  return touched ? '#59c124;' : '#b1b1b1';
}

function validationInput({ touched, error }) {
  return touched && error ? '#e92929' : isSuccess(touched);
}
function validationLabel({ touched, error }) {
  return touched && error ? '#e92929' : 'black';
}

export const Inputform = styled(InputMask)`
  background: #efefef;
  border: none;
  border-bottom: 2px solid ${validationInput};
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

export const Btn = styled.button`
  background: ${({ clear }) => (clear ? 'inherit' : '#969696')};
  border-radius: 8px;
  border: ${({ clear }) => (clear ? '1px solid black' : 'none')};
  font-weight: 600;
  padding: .6rem;
  margin: .5rem 0;
  width: 200px;

  @media (min-width: 620px){
    padding: .85rem;
  }
`;
