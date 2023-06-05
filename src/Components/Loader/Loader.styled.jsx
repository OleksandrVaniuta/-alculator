import styled from '@emotion/styled';

export const LoaderCalc = styled.div`
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    position: static;
    transform: none;
  }
`;

export const CountLoader = styled.div`
  margin: 0 auto;
  width: 40px;
`;
