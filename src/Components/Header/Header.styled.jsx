import styled from '@emotion/styled';

export const HeaderEl = styled.header`
  width: calc(100%-40%);
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3);
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;

  @media screen and (min-width: 480px) {
    display: block;
    marging: 0 auto;
  }
  @media screen and (min-width: 768px) {
    display: flex;
    font-family: 'Roboto', sans-serif;
    jutify-content: space-between;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 20px;
    padding-right: 20px;
    background-color: #fff;
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  margin: 0;
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    height: 32px;
    margin: 0;
    margin-top: 12px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 30px;
    height: 32px;
    margin: 0;
    margin-top: 12px;
  }
`;

export const WalletBox = styled.div`
  background-color: #433dc4;
  background-color: #fff;
  font-weight: 700;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  display: inline-flex;
  aling-items: center;
  color: #433dc4;
  fill: #433dc4;
  border-radius: 12px;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 15px;
  padding-right: 15px;
  font-size: 16px;
  border: 3px solid #433dc4;

  @media screen and (min-width: 768px) {
    font-weight: 700;
    font-size: 20px;
    display: inline-flex;
    margin-left: auto;
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 30px;
    padding-right: 30px;
    border-radius: 30px;

    @media screen and (min-width: 1280px) {
      padding-top: 9px;
      padding-bottom: 9px;
    }
  }
`;

export const AccName = styled.h2`
  margin: 0;
`;

export const Wallet = styled.div`
  margin-top: 0px;
`;

export const Button = styled.button`
background-color: #433dc4;
  font-weight: 700;
  line-height: 1.55em;
  cursor: pointer;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  display: inline-flex;
  aling-items: center;
  color: #fff;
  border: none;
  border-radius: 12px;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 15px;
  padding-right: 15px;
  font-size: 22px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    font-weight: 700;
    line-height: 1.55em;
    padding-top: 10px;
    padding-bottom: 10px;
     display: inline-flex;
    margin-left: auto;
    padding-left: 30px;
    padding-right: 30px;
    border-radius: 30px;
    
  }
  

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 0%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  &:hover {
    background-image: linear-gradient(
      90deg,
      #ff86ff 0,
      #ff79ff 16.67%,
      #ce68ff 33.33%,
      #8953f2 50%,
      #433dc4 66.67%,
      #002b9b 83.33%,
      #001b76 100%
    );
    animation: gradient 3s ease infinite;
    background-size: 400% 400%;
`;
