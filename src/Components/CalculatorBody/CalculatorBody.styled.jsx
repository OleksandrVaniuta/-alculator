import styled from '@emotion/styled';

export const Main = styled.main`
  padding-top: 20px;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  height: 80vh;

  @media screen and (min-width: 768px) {
    width: calc(100%-40px);
    padding-top: 40px;
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const Section = styled.section`
  position: relative;
  width: 90%;
  height: 90%;
  margin: 0 auto;
  box-shadow: 0px 0px 10px 8px rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  background-color: #fff;
  padding-top: 10px;

  @media screen and (min-width: 480px) {
    width: 480px;
    marging: 0 auto;
  }
  @media screen and (min-width: 768px) {
    height: 240px;
    display: flex;
    width: 100%;
    justify-content: space-around;
    padding-top: 20px;
  }
`;

export const SectionItem = styled.div`
  @media screen and (min-width: 768px) {
    width: 25%;
  }
`;

export const ItemTitle = styled.h3`
  margin: 0;
  margin-bottom: 20px;
  color: #a9a9a9;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 30px;
  }
`;

export const InputContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  padding-top: 20px;
  padding-bottom: 20px;

  @media screen and (min-width: 768px) {
    padding-top: 0px;
    padding-bottom: 0px;
  }
  @media screen and (min-width: 1280px) {
    width: 50%;
    padding-top: 0px;
    padding-bottom: 0px;
  }
`;

// ----- //

export const Select = styled.select`
  color: #fff;
  background-color: #433dc4;
  border: none;
  outline: none;
  border-radius: 5px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    padding-right: 10px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 24px;
  }
`;

export const Option = styled.option`
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 24px;
  }
  &:hover {
    background-color: #fff;
  }
  &:checked {
    font-weight: bold;
  }
`;

export const Label = styled.label`
  font-weight: 700;
  border-radius: 3px;
  border: none;
  box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.3);
  padding-left: 2px;
  color: #433dc4;
  background-color: #f2f2f0;
  margin: 0 auto;
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 24px;
    width: 320px;
  }
`;

export const Input = styled.input`
  outline: none;
  border: none;
  background-color: #f2f2f0;
  color: #433dc4;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 24px;
  }
`;

export const CalcBtn = styled.button`
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #433dc4;
  color: #fff;
  margin: 0 auto;
  border-radius: 10px;
  border: none;
  transition: box-shadow 300ms linear;
  transition: background-color 1000ms linear;
  cursor: pointer;
  font-size: 24px;
  box-shadow: 0px 0px 10px 8px rgba(0, 0, 0, 0.3);

  @media screen and (min-width: 768px) {
    position: static;
    font-size: 24px;
    width: 120px;
    margin-top: 50px;
    transform: none;
  }

  &:hover {
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.9);
  }
  &:disabled {
    background-color: #808080;
    cursor: not-allowed;
  }
`;

export const ResultBox = styled.p`
  border: 1px solid;
  border-radius: 3px;
  border: none;
  box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.3);
  color: #433dc4;
  background-color: #f2f2f0;
  height: 17px;
  width: 50%;

  aling-items: center;
  text-align: center;
  margin: 0;
  margin: 0 auto;
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    width: 100%;
    height: 20px;
    font-size: 16px;
    margin-bottom: 12px;
  }
  @media screen and (min-width: 1280px) {
    width: 80%;
    height: 31px;
    font-size: 24px;
  }
`;

export const CalcUsage = styled.p`
  margin: 0;
  color: #433dc4;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 24px;
  }
`;
