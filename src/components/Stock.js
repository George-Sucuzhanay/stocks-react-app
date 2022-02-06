import { useState, useEffect } from "react"

export default function Stock({symbol, companyName, latestPrice, changePercent}){
    return(
        <div>
            <div>
                <h1>{companyName}</h1>
                <h1>{symbol}</h1>
                <h1>{latestPrice}</h1>
                <h1>{changePercent}</h1>
            </div>

        </div>
    )
}