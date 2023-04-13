import type {FC} from 'react';

interface Props {
  accounts: string[] | null;
  handleAccounts: (accounts: string[]) => void;
}

const Header: FC<Props> = ({accounts, handleAccounts}) => {
  const isConnected = Boolean(accounts);

  const handleConnection = async () => {
    if (window.ethereum !== undefined) {
      const account = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });

      handleAccounts(account);
    }
  };

  return (
    <header className='py-4 px-12 border-2 border-black rounded-sm flex justify-between mb-4'>
      {/* Heading primary */}
      <h1 className='text-2xl'>This is Lottery</h1>

      {/* If wallet is connected */}
      {isConnected && (
        <p className='text-xl border-b-2 border-black font-bold'>Connected</p>
      )}

      {/* If wallet is not connected */}
      {!isConnected && (
        <button
          onClick={handleConnection}
          className='bg-black text-white py-2 px-4 hover:bg-gray-600'
        >
          Connect your wallet
        </button>
      )}
    </header>
  );
};

export default Header;
