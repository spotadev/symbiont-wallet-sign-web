import { useAccount, useSignMessage } from "wagmi";

export default function Sign() {
  const { data, isError, isSuccess, signMessage } = useSignMessage();

  const { isConnecting, isDisconnected } = useAccount()

  const getSignatureJSX = () => {
    if (isSuccess) {
      return (
        <div style={{ marginTop: '20px' }}>
          <span style={{ fontWeight: 'bold' }}>Signature: </span>
          <span style={{ wordBreak: 'break-all' }}>{data}</span>
        </div >
      );
    }
    else if (isError) {
      return (
        <div style={{ marginTop: '20px' }}>
          Error signing message
        </div >
      );
    }
    else {
      return ('');
    }
  }

  if (!isConnecting && !isDisconnected) {
    return (
      <div style={{ paddingBottom: '30px' }}>
        <button onClick={() => signMessage({ message: 'Symbiont Rocks' })}>
          Sign message
        </button>
        {getSignatureJSX()}
      </div >
    );
  }
  else {
    return (
      ''
    );
  }
}