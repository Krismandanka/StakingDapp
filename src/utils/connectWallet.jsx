

import {Contract, ethers} from "ethers";
import stakingAbi from "../ABI/stakingAbi.json";
import stakeTokenAbi from "../ABI/stakeTokenAbi.json";
export const connectWallet =async()=>{
    try {

        let [signer,provider,stakingContract,stakeTokenContract,chainId]= [null,null,null,null,null];

        if(window.ethereum===null){
            throw new Error("Metamask is not installed");
        }

        const account = await window.ethereum.request({
            method:"eth_requestAccounts"
        })
        // console.log("acccccccccccccccount",account);

        let chainIdHex = await window.ethereum.request({
            method:"eth_chainId"
        })

        // console.log(chainIdHex)
        chainId =parseInt(chainIdHex,16);
        let selectedAccount = account[0];

        if(!selectedAccount){
            throw new Error("No etherium available")
        }

        provider = new ethers.BrowserProvider(window.ethereum);
        signer = await provider.getSigner();

        const stakingContractAddress= "0xfae445ddde9fbb64830a6268726e48b5bd27d25b";
        const stakeTokenContractAddress="0xe37e3d65e921ed3d5f5764f09bb1225055c30153";

        stakingContract = new Contract(stakingContractAddress,stakingAbi,signer);
        stakeTokenContract = new Contract(stakeTokenContractAddress,stakeTokenAbi,signer);
        // console.log(chainId);
        return {provider,selectedAccount,stakeTokenContract,stakingContract,chainId};



        
    } catch (error) {
        console.error(error);
        throw error;
    }

    
} 


