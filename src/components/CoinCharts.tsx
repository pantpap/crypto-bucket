import React, { useState, useEffect } from "react";
import Chart from "react-google-charts";
import { useParams } from "react-router-dom";
import CoinsService from "../services/CoinsService";

const CoinCharts: React.FC = () => {
    const [prices, setPrices] = useState<any>({});

    const { id }= useParams();

    const coinChart = (id: string) => {
      CoinsService.coinChart(id)
        .then((response: any) => {
          setPrices(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    };

    useEffect(() => {
      if (id)
      coinChart(id);
    }, [id]);

    var chartData: any = [];
    chartData.push(["Date", "Price"]);
    prices?.prices?.map((p:Array<any>) => {
        p[0] = new Date(p[0]);
        chartData.push(p);
  })

    return (
      <div className="list row">
        <div className="col-md-12">
          <h4>Coin Chart</h4>
          <Chart
            chartType="LineChart"
            data={chartData}
            width="100%"
            height="500px"
          />
        </div>
        
      </div>
    );
  };
  

export default CoinCharts;
