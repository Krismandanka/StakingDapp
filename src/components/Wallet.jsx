// import { useState, useEffect, Children } from "react";

// // import { connectWallet } from "../utils/connectWallet";
// import {connectWallet} from "../utils/connectWallet"
// import React from 'react'
// // import Web3Context from "../context/Web3Context";
// // import Button from "./Button";

// const Wallet = () => {
//   const [state, setState] = useState({
//     provider: null,
//     selectedAccount: null,
//     stakingContract: null,
//     stakeTokenContract: null,
//     chainId: null,
//   });

//   const [isLoading, setIsLoading] = useState(false);
//   const handleWallet = async () => {
//     try {
//       setIsLoading(true);
//       const {
//         provider,
//         selectedAccount,
//         stakingContract,
//         stakeTokenContract,
//         chainId,
//       } =await connectWallet();

//       // const {provider} =await  connectWallet();
//       // console.log(provider);

//       console.log(provider,
//         selectedAccount,
//         stakingContract,
//         stakeTokenContract,
//         chainId);

//       setState({
//         provider,
//         selectedAccount,
//         stakingContract,
//         stakeTokenContract,
//         chainId,
//       });

//     //   setIsLoading(false);

//     } catch (error) {
//         console.error(error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return
//   // <div>
//     {/* <Web3Context.Provider value={state}>
//       {children}
//     </Web3Context.Provider>

//     {isLoading&& <p>Loading...</p>} */}
//     <button onClick={handleWallet}>Connect Wallet</button>

//   // </div>

// };

// export default Wallet;

import { useState, useEffect } from "react";
import Web3Context from "../context/Web3Context";
import { handleAccountChange } from "../utils/handleAccountChange";
import { handleChainChange } from "../utils/handleChainChange";
import { connectWallet } from "../utils/connectWallet";

import React from "react";

const Wallet = ({ children }) => {
  const [state, setState] = useState({
    provider: null,
    selectedAccount: null,
    stakingContract: null,
    stakeTokenContract: null,
    chainId: null,
  });

  const [isLoading, setIsLoading] = useState(false);

  useEffect(()=>{
    window.ethereum.on('accountsChanged',()=>handleAccountChange(setState))
    window.ethereum.on('chainChanged',()=>handleChainChange(setState))
    return ()=>{
      window.ethereum.removeListener('accountsChanged',()=>handleAccountChange(setState))
      window.ethereum.removeListener('chainChanged',()=>handleChainChange(setState))
    }
  },[])

  const handleWallet = async () => {
    try {
      setIsLoading(true);
      const {
        provider,
        selectedAccount,
        stakingContract,
        stakeTokenContract,
        chainId,
      } = await connectWallet();

      // const {provider} =await  connectWallet();
      // console.log(provider);

      // console.log(
      //   provider,
      //   selectedAccount,
      //   stakingContract,
      //   stakeTokenContract,
      //   chainId
      // );

      setState({
        provider,
        selectedAccount,
        stakingContract,
        stakeTokenContract,
        chainId,
      });

      //   setIsLoading(false);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div>
      <Web3Context.Provider value={state}>{children}</Web3Context.Provider>

      <button onClick={handleWallet}>Connect Wallet</button>
    </div>
  );
};

export default Wallet;
