import React, { useContext } from 'react'
import { GlobalContext } from '../context/Context'

export default function Total() {

    const {transactions} = useContext(GlobalContext)


    const totalIncome =transactions.map(transaction=>transaction.amount)
    .filter(item=>item > 0).reduce((acc,item)=>(acc+item),0).toFixed(2)

    const totalExpence =transactions.map(transaction=>transaction.amount)
    .filter(item=>item < 0).reduce((acc,item)=>(acc+item),0).toFixed(2)

    const balance = totalIncome-Math.abs(totalExpence);

  return (
    <div>
       <h1> Total Expenses </h1>
      <div className="monthlymoneymanger" style={{display:"flex", justifyContent:"space-around"  ,padding:"10px"}}>
      <div className="monthlyincome" style={{padding:"10px",height:"200px", marginTop:"10px", marginLeft:"25px" , borderRadius:"10px",boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",borderCollapse:"collapse"}}>
        <h3 style={{margin:"0 100px 100px 100px", color: "green", fontSize: "30px" }}>income</h3>
        <h2>{totalIncome}</h2>
      </div>
       <div className="div" style={{display:"flex",flexDirection:"column"}}>
      <h1>balance</h1>
      <h4>{balance}</h4>
      </div>
      
      <div className="monthlyexpense" style={{padding:"10px",height:"200px", marginTop:"10px",marginLeft:'25px',borderRadius:"10px",boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
        <h3 style={{margin:"0 100px 100px 100px",color:"red",fontSize:"30px"}}>expense</h3>
        <h2>{totalExpence}</h2>
      </div>
      </div>
    </div>
  )
}
