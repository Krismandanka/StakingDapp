



export const handleChainChange = async(setState)=>{
    let chainIdHex = await window.ethereum.request({
        method:"eth_chainId"
    })

    console.log(chainIdHex)
    let chainId =parseInt(chainIdHex,16);
    console.log(chainId)
    setState(pre=>({
     ...pre,chainId
    }))
 }