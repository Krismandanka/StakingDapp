import { useContext} from "react";
import Web3Context from "../../context/Web3Context"

import { toast } from "react-hot-toast";


const ClaimReward = ()=>{
 const {stakingContract}=useContext(Web3Context);
 const claimReward = async()=>{
  try{
    const transaction = await stakingContract.getReward();
    await toast.promise(transaction.wait(),
    {
      loading: "Transaction is pending...",
      success: 'Transaction successful 👌',
      error: 'Transaction failed 🤯'
    });
    
  }catch(error){
    console.error("Claim Reward Failed",error.message)
  }
 }
 return (
    <>
    <div className="claim-reward">
    <button type="button" onClick={claimReward}>Claim Reward</button>
     
     </div>
    </>
 )
}

export default ClaimReward;