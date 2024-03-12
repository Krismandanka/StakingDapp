import { ethers } from "ethers";
import React from "react";
import { useState, useContext, useRef } from "react";
import Web3Context from "../../context/Web3Context";
import { toast } from "react-hot-toast";

const TokenApproval = () => {
  const { stakeTokenContract, stakingContract, provider } =
    useContext(Web3Context);

  const approvedTokenRef = useRef();

  const { transactionStatus, setTransactionStatus } = useState("");

  const approveToken = async (e) => {
    e.preventDefault();
    // console.log("amount");

    const amount = approvedTokenRef.current.value.trim();
    // console.log("amount", amount);
    if (isNaN(amount) || amount <= 0) {
      console.error("Please enter  avalid positobe number");
      return;
    }
    const amountToSend = ethers.parseUnits(amount, 18).toString();
    // try {

    //     const transaction = await stakeTokenContract.approve(stakingContract.target,amountToSend);
    //     console.log("transaction",transaction);
    //     setTransactionStatus("transaction is pending");

    //     // const transObj = await provider.getTransaction(transaction)
    //     const receipt = await transaction.wait();
    //     console.log("recipt",receipt);
    //     if(receipt.status===1){
    //         setTransactionStatus("Transaction is successfully");
    //         setTimeout(()=>{
    //             setTransactionStatus("");
    //         },5000)
    //         approvedTokenRef.current.value="";
    //     }
    //     else{
    //         setTransactionStatus("Transaction failded");
    //     }

    //     console.log(transaction);
    // } catch (error) {
    //   console.error("token appro failsd".error);
    // }

    try {
      const transaction = await stakeTokenContract.approve(
        stakingContract.target,
        amountToSend
      );
      await toast.promise(transaction.wait(), {
        loading: "Transaction is pending...",
        success: "Transaction successful 👌",
        error: "Transaction failed 🤯",
      });
      approvedTokenRef.current.value = "";
    } catch (error) {
      toast.error("Token Approval Failed");
      console.error(error.message);
    }
  };

  return (
    <div>
      {transactionStatus && <div>{transactionStatus} </div>}
      <form onSubmit={approveToken} className="token-amount-form">
        <label className="token-input-label">Token Approval:</label>
        <input type="text" ref={approvedTokenRef} />
        <button onClick={approveToken} type="submit">
          TokenApprove
        </button>
      </form>
    </div>
  );
};

export default TokenApproval;
