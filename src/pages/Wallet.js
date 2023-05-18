import React from 'react';
import Header from '../components/Header';
import WalletForm from '../components/WalletForm';
import Table from '../components/Table';

class Wallet extends React.Component {
  render() {
    return (
      <main>
        <div>TrybeWallet</div>
        <div>
          <Header />
        </div>
        <div>
          <WalletForm />
        </div>
        <div>
          <Table />
        </div>
      </main>
    );
  }
}

export default Wallet;
