import type {FC, ChangeEvent, FormEvent, MouseEvent} from 'react';
import {useEffect, useState} from 'react';
import {ethers} from 'ethers';

import {address, abi} from '~/lib/Lottery.json';

interface Props {
  accounts: string[] | null;
}

const getContract = async () => {
  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();
  const contract = new ethers.Contract(address, abi, signer);

  return {
    provider,
    signer,
    contract,
  };
};

const Main: FC<Props> = ({accounts}) => {
  const isConnected = Boolean(accounts);

  const [isLoading, setIsLoading] = useState(false);
  const [manager, setManager] = useState('');
  const [balance, setBalance] = useState(0);
  const [players, setPlayers] = useState(0);

  const [ether, setEther] = useState(0.1);
  const [isEntering, setIsEntering] = useState(false);

  const [isPicking, setIsPicking] = useState(false);

  useEffect(() => {
    if (isConnected) {
      (async () => {
        setIsLoading(true);

        if (window.ethereum !== undefined) {
          const {provider, contract: lottery} = await getContract();

          const proOne = lottery.manager();
          const proTwo = lottery.getPlayers();
          const proThree = provider.getBalance(await lottery.getAddress());
          const [manager, players, balance] = await Promise.all([
            proOne,
            proTwo,
            proThree,
          ]);

          setManager(manager);
          setPlayers(players.length);
          setBalance(parseFloat(ethers.formatEther(balance)));
        }

        setIsLoading(false);
      })();
    }
  }, [isConnected]);

  const handleEtherChange = (e: ChangeEvent<HTMLInputElement>) =>
    setEther(parseFloat(e.target.value));

  const handleEnter = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsEntering(true);

    const {contract: lottery} = await getContract();

    lottery
      .enter({
        value: ethers.parseEther(ether.toString()),
      })
      .catch((err) => console.log('Error', err))
      .finally(() => setIsEntering(false));
  };

  const handlePickWinner = async (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    setIsPicking(true);

    const {contract: lottery} = await getContract();

    lottery
      .pickWinner()
      .catch((err) => console.log('Error', err))
      .finally(() => setIsPicking(false));
  };

  if (!isConnected)
    return (
      <main className='border-2 border-black rounded-sm p-8 min-h-[85vh] flex justify-center items-center'>
        <p className='text-xl'>Please connect your wallet first</p>
      </main>
    );

  return (
    <main className='border-2 border-black rounded-sm p-8 text-center min-h-[85vh]'>
      {isLoading && <p className='text-xl'>Loading...</p>}
      {!isLoading && (
        <>
          {/* Information about the lottery */}
          <div className='[&>*]:mb-8 mb-40'>
            <p className='text-md'>
              Welcome to the lottery, the manager is:
              <span className='font-bold m-2'>{manager}</span>
            </p>
            <p className='text-md'>
              Current balance is:
              <span className='font-bold m-2'>{balance}</span>
              ether
            </p>
            <p className='text-md'>
              Players in the lottery:
              <span className='font-bold m-2'>{players}</span>
            </p>
          </div>

          {/* Entering players into the lottery */}
          <div className='mb-28'>
            <form
              id='ether-form'
              className='w-max mx-auto flex flex-col'
              onSubmit={handleEnter}
            >
              <div>
                <input
                  type='number'
                  step={0.1}
                  min={0.1}
                  id='ether-value'
                  className='border-2 border-black mr-4 py-1 px-3'
                  onChange={handleEtherChange}
                  value={ether}
                />
                <label htmlFor='ether-value'>Ether</label>
              </div>
              <button
                form='ether-form'
                className='bg-black text-white my-2 py-1 font-bold uppercase'
              >
                Enter
              </button>
            </form>
            {isEntering && <p>Entering you into the lottery...</p>}
          </div>

          {/* Picking a winner by the manager */}
          {
            <>
              <button
                className='bg-black text-white font-bold uppercase py-2 px-6'
                onClick={handlePickWinner}
              >
                Pick a winner
              </button>
              {isPicking && <p>Picking a winner...</p>}
            </>
          }
        </>
      )}
    </main>
  );
};

export default Main;
