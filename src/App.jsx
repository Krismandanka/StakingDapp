// import { useState } from 'react'
import Wallet from "./components/Wallet"
import './App.css'
import Navigation from "./components/Navigatio/Navigation"
import DisplayPannel from "./components/DisplayPanel/DisplayPannel"
import TokenApproval from "./components/StakeToken/TokenApproval"
import StakeAmount from "./components/StakeToken/StakeAmount"
import ClaimReward from "./components/ClaimReward/ClaimReward"
import Withdraw from "./components/Withdraw/Withdraw"
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Wallet>
      <Navigation />
      <DisplayPannel/>
      <TokenApproval />
      <StakeAmount/>
      <Withdraw/>
      <ClaimReward/>
    </Wallet>
    
      
    </>
  )
}

export default App
