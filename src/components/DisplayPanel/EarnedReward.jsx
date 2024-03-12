

import React from 'react'
// import StakedAmount from "./StakedAmount"
import { useState,useEffect,useContext } from "react";
import Web3Context from "../../context/Web3Context";
import {ethers} from "ethers"



const EarnedReward = () => {
  const {stakingContract,selectedAccount}=useContext(Web3Context);
  const [rewardVal,setRewardVal]=useState("0");



  useEffect(()=>{
    const fetchStakeRewardInfo =async()=>{
        try{
          //fetching earned amount of a user
           const rewardValueWei = await stakingContract.earned(selectedAccount);
           const rewardValueEth = ethers.formatUnits(rewardValueWei,18).toString();
           const roundedReward = parseFloat(rewardValueEth).toFixed(2)
           setRewardVal(roundedReward)
        }catch(error){
          toast.error("Error fetching the reward:");
          console.error(error.message)
        }
      }
        const interval = setInterval(()=>{
          stakingContract && fetchStakeRewardInfo();
        },20000)
        return ()=> clearInterval(interval)
  },[stakingContract,selectedAccount])




  return (
    <div>
        <p>Earned Reward: {rewardVal}</p>
        
        
    </div>
  )
}

export default EarnedReward

