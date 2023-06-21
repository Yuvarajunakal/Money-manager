import React from 'react'

export default function Yearly() {
  return (
    <div>
       <h1> yearly Expenses </h1>
      <div className="monthlymoneymanger" style={{display:"flex", justifyContent:"space-around"  ,padding:"10px"}}>
      <div className="monthlyincome" style={{padding:"10px",height:"200px", marginTop:"10px", marginLeft:"25px" , borderRadius:"10px",boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",borderCollapse:"collapse"}}>
        <h3 style={{margin:"0 100px 100px 100px"}}>income</h3>
        <h2>5000</h2>
      </div>
      
      <div className="monthlyexpense" style={{padding:"10px",height:"200px", marginTop:"10px",marginLeft:'25px',borderRadius:"10px",boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>
        <h3 style={{margin:"0 100px 100px 100px"}}>expense</h3>
        <h2>4000</h2>
      </div>
      </div>
    </div>
  )
}
