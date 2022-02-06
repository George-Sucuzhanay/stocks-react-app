import { useState, useEffect } from "react"

export default function Stock({symbol, companyName, latestPrice, changePercent}){
    
    return(
        <div className="singleStock">
            <div className="stockDiv">
                <h1 id="symbol">{symbol}</h1>
                <h1 id="companyName">{companyName}</h1>
            </div>
            <div className="stockDiv">
                <h1 id="latestPrice">{latestPrice}</h1>
                <h1 id="changePercent">{changePercent}%</h1>
            </div>
        </div>
    )
}