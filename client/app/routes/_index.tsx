import type {V2_MetaFunction} from '@remix-run/node';
import {useState} from 'react';

import Header from '~/components/nav/Header';
import Main from '~/components/main/Main';

export const meta: V2_MetaFunction = () => [{title: 'Lottery'}];

const Index = () => {
  const [accounts, setAccount] = useState<string[] | null>(null);

  const handleAccounts = (accounts: any) => setAccount(accounts);

  return (
    <div>
      <Header accounts={accounts} handleAccounts={handleAccounts} />
      <Main accounts={accounts} />
    </div>
  );
};

export default Index;
