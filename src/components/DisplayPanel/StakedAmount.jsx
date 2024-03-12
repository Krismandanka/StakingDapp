
import React from 'react'
import { ethers } from 'ethers'
import { useState,useEffect,useContext } from 'react'
import Web3Context from '../../context/Web3Context'


const StakedAmount = () => {
    const{stakingContract,selectedAccount} = useContext(Web3Context);
    // const p=useContext(Web3Context);
    // console.log("ssssss",p)
    // console.log(selecte}=useContext(Web3Context);
    const [stakedAmount,setStakedAmount]= useState("0");
    console.log("stkin",stakingContract)
    useEffect(()=>{
        const fetchStakedBalance = async()=>{
            try {
                console.log("pppppppppppppp",selectedAccount)

                const amountStaked = await stakingContract.stakedBalance(selectedAccount);
                const amountStakedEth = ethers.formatUnits(amountStaked.toString(),18);
                setStakedAmount(amountStakedEth)
                console.log(amountStakedEth);
            } catch (error) {
                console.error(error);
            }
        }
        stakingContract && fetchStakedBalance();
    },[stakingContract,selectedAccount]);

  return (
    <div>StakedAmount {stakedAmount}</div>
  )
}

export default StakedAmount
