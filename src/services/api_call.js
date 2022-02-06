import axios from "axios";

export async function api_call(){
    const stock_API = `${process.env.REACT_APP_STOCK_URL}${process.env.REACT_APP_STOCK_KEY}`;

    const stockCall = await axios.get(stock_API)
    .then(({ data }) => {
        return data;
    });
    return stockCall;

}