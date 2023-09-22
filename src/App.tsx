import React from 'react';
import logo from './logo.svg';
import './App.css';

import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'

import { WagmiConfig, useAccount, useSignMessage } from 'wagmi'
import { arbitrum, mainnet } from 'wagmi/chains'
import ConnectButton from './components/ConnectButton';
import Connect from './components/ConnectInfo';
import ConnectInfo from './components/ConnectInfo';
import Sign from './components/Sign';

// 1. Get projectId
const projectId = process.env.REACT_APP_WALLET_CONNECT_PROJECT_ID;
console.log('projectId', projectId);

if (!projectId) {
  throw new Error('Please copy .env.sample to .env and set variables');
}

// 2. Create wagmiConfig
const chains = [mainnet, arbitrum]
const wagmiConfig = defaultWagmiConfig({ chains, projectId, appName: 'Web3Modal' })

// 3. Create modal
createWeb3Modal({ wagmiConfig, projectId, chains })

// Required because of bug:
// https://github.com/WalletConnect/walletconnect-monorepo/issues/3165
localStorage.clear()

function App() {
  return (
    <WagmiConfig config={wagmiConfig}>
      <ConnectButton />
      <br /><br />
      <ConnectInfo />
      <br /><br />
      <Sign />
    </WagmiConfig>
  );
}

export default App;
