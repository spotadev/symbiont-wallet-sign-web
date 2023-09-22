import { useAccount, useSignMessage } from "wagmi";

export default function Sign() {
  const { data, isError, isLoading, isSuccess, signMessage } = useSignMessage({
    message: 'Symbiont Rocks',
  })

  const { isConnecting, isDisconnected } = useAccount()

  if (!isConnecting && !isDisconnected && !isLoading) {
    return (
      <>
        <button disabled={isLoading} onClick={() => signMessage()}>
          Sign message
        </button>
        <br /><br />
        {isSuccess && <div>Signature: {data}</div>}
        {isError && <div>Error signing message</div>}
      </>
    );
  }
  else {
    return (
      <></>
    );
  }
}