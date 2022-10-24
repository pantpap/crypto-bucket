import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CoinsService from "../services/CoinsService";

const CoinsList: React.FC = () => {
    const [coins, setCoins] = useState<any[]>([]);
  
    useEffect(() => {
      retrieveCoins();
    }, []);

    const retrieveCoins = () => {
      CoinsService.getAll()
        .then((response: any) => {
          setCoins(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    };

    return (
      <div className="list row">
        <div className="col-md-12">
          <h4>Coins List</h4>
          <table className={"table table-striped table-hover table-bordered"}>
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Logo</th>
      <th scope="col">Name</th>
      <th scope="col">Symbol</th>
      <th scope="col">Market Cap</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {coins && coins?.map((coin:any, index: any) => (
        <tr key={index}>
          <th scope="row"> {coin?.id}</th>
          <td><img src={coin?.image} style={{width: "45px"}} alt={coin?.id} /></td>
          <td>{coin?.name}</td>
          <td>{coin?.symbol}</td>
          <td>{coin?.market_cap}</td>
          <td><Link to={`/coins/${coin.id}`}>more</Link></td>
      </tr>
        ))}
  </tbody>
</table>




          
      
  
        </div>
      </div>
    );
  };
  

export default CoinsList;
