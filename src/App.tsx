import appStyle from './App.module.css';
import './App.css'
import Buttons from './components/Buttons';
import ConnectInfo from './components/ConnectInfo';
import Sign from './components/Sign';

function App() {

  return (
    <div className={appStyle.centeredPage}>
      <span style={{ fontWeight: 'bold' }}>Demo using @web3modal/wagmi 5.0.6</span>
      <br /><br />
      This example allows you to connect to your wallet and sign some
      text.  The Sign Button shows once connected.
      <br /><br />
      <Buttons />
      <br /><br />
      <ConnectInfo />
      <br /><br />
      <Sign />
      Not included in this example, but none the less relevant:
      <br /><br />
      <div style={{ paddingLeft: '20px' }}>
        If your are creating a login using your wallet you will
        need to send the signature to the backend to be verified.
      </div>
    </div>
  )
}

export default App
