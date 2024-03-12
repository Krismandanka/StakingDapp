import React from 'react'
import { useState,useEffect,useContext } from "react";
import Web3Context from "../../context/Web3Context";
import {ethers} from "ethers"


const RewardRate = () => {
  const {stakingContract,selectedAccount}=useContext(Web3Context);
  const [rewardRate,setRewardRate]=useState("0");

  useEffect(()=>{
    const fetchRewardRate = async()=>{
       try{
          const rewardRateWei = await stakingContract.REWARD_RATE();
          // console.log(rewardRateWei)
          const rewardRateEth = ethers.formatUnits(rewardRateWei.toString(),18);
          setRewardRate(rewardRateEth)
        }catch(error){
          toast.error("Error fetching reward rate");
          console.error(error.message)
       }
    }
    stakingContract && fetchRewardRate()
  },[stakingContract,selectedAccount])

  return (
    <div>RewardRate {rewardRate} token/sec</div>
  )
}

export default RewardRate