import { useState, useEffect } from "react";
import { api_call } from "../services/api_call";
import Stock from "./Stock";

function Stocks(){
    const [stocks, setStocks] = useState([]);

    useEffect(() =>{
        const fetchData = async() => {
            try{
                const response = await api_call();
                setStocks(response);
            } catch(error){
                console.log(error);
            }
        }
        fetchData()
    }, [])

    return(
        <div>
            {(stocks ||  []).map((stock,index) => {
                const {symbol, companyName, latestPrice, changePercent} = stock
                return <Stock symbol={symbol} companyName={companyName} latestPrice={latestPrice} changePercent={changePercent} key={index}/>;
            })}
        </div>
    )
}
export default Stocks;