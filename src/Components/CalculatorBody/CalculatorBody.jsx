import { useState, useEffect } from 'react';
import Web3API from '../../Aplication';
import ContractABI from '../../Contract/abi.json';
import Loader from '../Loader/Loader';
import CounterLoader from '../Loader/CounterLoader';
import {
  Section,
  Main,
  InputContainer,
  SectionItem,
  Select,
  Option,
  Label,
  Input,
  CalcBtn,
  ResultBox,
  CalcUsage,
  ItemTitle,
} from './CalculatorBody.styled';

const Web3Connect = new Web3API();

function CalculatorBody({ web3, setAccounts, accounts }) {
  const [valueA, setValueA] = useState(0);
  const [valueB, setValueB] = useState(0);
  const [result, setResult] = useState('');
  const [opetatioType, setOperationType] = useState('add');
  const [calculating, setCalculating] = useState(false);
  const [contract, setContract] = useState(null);
  const [usageCount, setUsageCount] = useState(0);
  const [count, setCount] = useState(false);

  useEffect(() => {
    Web3Connect.loadWalletAdress(web3, setAccounts, setCount);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [web3]);

  useEffect(() => {
    Web3Connect.getContract(web3, ContractABI, setContract);
  }, [web3]);

  useEffect(() => {
    Web3Connect.getCount(contract, setUsageCount, setCount, web3);
  }, [contract, result]);

  const handleCalculate = async () => {
    Web3Connect.calculate(
      contract,
      opetatioType,
      valueA,
      valueB,
      accounts,
      setResult,
      setCalculating
    );
  };

  return (
    <Main>
      <Section>
        <SectionItem>
          <label htmlFor="type">
            <ItemTitle>Operation Type</ItemTitle>
            <Select
              value={opetatioType}
              onChange={e => setOperationType(e.target.value)}
            >
              <Option value="add">add</Option>
              <Option value="subtract">subtract</Option>
              <Option value="divide">divide</Option>
              <Option value="multiply">multiply</Option>
            </Select>
          </label>
        </SectionItem>
        <InputContainer>
          <ItemTitle>Values</ItemTitle>
          <Label>
            a:
            <Input
              type="number"
              name="Value A"
              onChange={e => setValueA(e.target.value)}
            />
          </Label>
          <Label>
            b:
            <Input
              type="number"
              name="Value B"
              onChange={e => setValueB(e.target.value)}
            />
          </Label>
          {calculating ? (
            <Loader />
          ) : (
            <CalcBtn
              type="number"
              onClick={handleCalculate}
              disabled={!(accounts.length > 0)}
            >
              Calculate
            </CalcBtn>
          )}
        </InputContainer>
        <SectionItem>
          <ItemTitle>Result</ItemTitle>
          <ResultBox>{result}</ResultBox>
          {count && <CounterLoader />}
          {accounts.length > 0 && !count && (
            <CalcUsage>Calculator used: {usageCount} times</CalcUsage>
          )}
        </SectionItem>
      </Section>
    </Main>
  );
}

export default CalculatorBody;
