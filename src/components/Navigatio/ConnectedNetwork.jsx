import React from 'react'
import { useContext } from 'react'
import Web3Context from '../../context/Web3Context'

const ConnectedNetwork = () => {
  const {chainId} = useContext(Web3Context);
  // console.log(",,,,,,,",chainId)
  if(chainId === 11155111){
    return (
      <div>Connected Network: Sepolia</div>
    )
  }
  else{
    return (
      <div>Connected Network: Unsupported</div>
    )

  }

  
  
}

export default ConnectedNetwork