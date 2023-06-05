import {
  HeaderEl,
  WalletBox,
  AccName,
  Wallet,
  Button,
  Title,
} from './Header.styled';
import { AiFillWallet } from 'react-icons/ai';
import Web3API from '../../Aplication';

const Web3Connect = new Web3API();

function Header({ accounts, ConectWallet }) {
  const HadleConnectWithMeta = () => {
    Web3Connect.initializationWeb3(ConectWallet);
  };

  return (
    <HeaderEl>
      <Title>Calculator</Title>
      {accounts.length > 0 ? (
        <WalletBox>
          <Wallet>
            <AiFillWallet size={30} />
          </Wallet>

          <AccName>
            {accounts[0].slice(0, 2)}...
            {accounts[0].slice(accounts[0].length - 4, accounts[0].length)}
          </AccName>
        </WalletBox>
      ) : (
        <Button onClick={HadleConnectWithMeta}>Connect Wallet</Button>
      )}
    </HeaderEl>
  );
}

export default Header;
