import Web3 from 'web3';
import Notify from './Notifycation';

class Web3API {
  constructor() {
    this.ContactAdress = '0x1851ffBce02A134eFd9ddBC91920b0c6DCEfB6f5';
    this.chainId = '11155111';
  }

  initializationWeb3(setWeb3) {
    const enableWeb3 = async () => {
      try {
        const initWeb3 = new Web3(window.ethereum);
        await window.ethereum.enable();
        this.web3dsa = initWeb3;
        setWeb3(initWeb3);
        this.getNetwork(initWeb3);
      } catch (error) {}
    };
    enableWeb3();
  }

  loadWalletAdress(web3, setAccounts, setCount) {
    const loadAccounts = async () => {
      if (web3 && typeof web3.eth !== 'undefined') {
        try {
          const accounts = await web3.eth.getAccounts();
          setAccounts(accounts);
          Notify.successMessageNotify('connected to wallet');
          setCount(true);
        } catch (error) {
          Notify.errorMessageNotify('Unable to access account');
        }
      }
    };
    loadAccounts();
  }

  getContract(web3, ContractABI, setContract) {
    const loadContract = async () => {
      if (web3 && typeof web3.eth !== 'undefined') {
        try {
          const contract = new web3.eth.Contract(
            ContractABI,
            this.ContactAdress
          );
          contract.transactionConfirmationBlocks = 1;
          setContract(contract);
        } catch (error) {
          console.error('Failed to access contract:', error);
        }
      }
    };

    loadContract();
  }

  calculate(
    contract,
    opetatioType,
    valueA,
    valueB,
    accounts,
    setResult,
    setCalculating
  ) {
    setCalculating(true);
    const handleCalculate = async () => {
      try {
        const result = await contract.methods[opetatioType](
          valueA,
          valueB
        ).send({
          from: accounts[0],
        });

        setResult(result.events.Result.returnValues.result);
        setCalculating(false);
      } catch (error) {
        setCalculating(false);
        Notify.infoMessageNotify('Сalculating was rejected');
      }
    };
    handleCalculate();
  }

  getCount(contract, setUsageCount, setCount, accounts) {
    if (contract && accounts.length > 0) {
      const fetchUsageCount = async () => {
        try {
          const count = await contract.methods['usageCount']().call();

          setUsageCount(count);

          setCount(false);
        } catch (error) {
          console.error('Error fetching usage count:', error);
          setCount(false);
        }
      };

      fetchUsageCount();
    }
  }

  async getNetwork(web3) {
    if (window.ethereum.networkVersion !== this.chainId) {
      try {
        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: web3.utils.toHex(this.chainId) }],
        });
      } catch (error) {
        if (error.code === 4902) {
          await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [
              {
                chainId: web3.utils.toHex(this.chainId),
                chainName: 'Sepolia',
                nativeCurrency: {
                  name: 'ETH',
                  symbol: 'ETH',
                  decimals: 18,
                },
                rpcUrls: ['https://rpc.sepolia.org'],
                blockExplorerUrls: ['https://sepolia.etherscan.io'],
              },
            ],
          });
          Notify.infoMessageNotify('network added');
        }
      }
    }
  }
}

export default Web3API;
