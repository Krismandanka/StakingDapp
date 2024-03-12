

export const handleAccountChange = async(setState)=>{
    const accounts = await window.ethereum.request({
        method:"eth_requestAccounts"
    })
    // console.log("selll",accounts)

   let  selectedAccount=accounts[0];
   setState(pre=>({
    ...pre,selectedAccount
   }))
}
