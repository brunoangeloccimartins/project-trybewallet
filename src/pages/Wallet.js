import React from 'react';
import Header from '../components/Header';
import WalletForm from '../components/WalletForm';

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
      </main>
    );
  }
}

export default Wallet;
