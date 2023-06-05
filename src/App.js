import './App.css';
import { useState, useEffect } from 'react';
import Header from './Components/Header/Header';
import CalculatorBody from './Components/CalculatorBody/CalculatorBody';
import { ToastContainer } from 'react-toastify';
import Notify from './Notifycation';

function App() {
  const [web3, setWeb3] = useState({});
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', function (accounts) {
        if (accounts.length === 0) {
          setAccounts('');
          Notify.infoMessageNotify('Disabled from metamask');
        }
      });
      return;
    }
    if (!window.ethereum) {
      console.log('instal metamask');
      Notify.errorMessageNotify('Metamask is not instaled');
      return;
    }
  }, []);

  return (
    <div className="App">
      <Header accounts={accounts} ConectWallet={setWeb3} />
      <CalculatorBody
        web3={web3}
        setAccounts={setAccounts}
        accounts={accounts}
      />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
