
import { useWeb3Modal } from '@web3modal/wagmi/react'

export default function ConnectButton() {
  // 4. Use modal hook
  const { open } = useWeb3Modal()

  return (
    <div>
      Demo for using beta Web3Modal
      <br /><br />
      <button onClick={() => open()}>Open Connect Modal</button>
      <br /><br />
      <button onClick={() => open({ view: 'Networks' })}>Open Network Modal</button>
    </div>
  )
}