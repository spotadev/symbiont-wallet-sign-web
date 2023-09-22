import { useAccount } from "wagmi"

export default function ConnectInfo() {
  const { address, isConnecting, isDisconnected } = useAccount()

  if (isConnecting) {
    return <div>Status: Connecting…</div>
  }
  else if (isDisconnected) {
    return <div>Status: Disconnected</div>
  }
  else {
    return <div>Connected. Address: {address}</div>
  }
}