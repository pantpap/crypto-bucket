import IChart from "../entities/IChart";
import ICoin from "../entities/ICoin";
import http from "../services/Api";


const getAll = () => {
    return http.get<ICoin>("/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false");
};

const getCoin = (id: any) => {
    return http.get<ICoin>(`/coins/${id}`);
};

const coinChart = (id: any) => {
    return http.get<IChart>(`/coins/${id}/market_chart?vs_currency=usd&days=1`);
};

const CoinsService = {
    getAll,
    getCoin,
    coinChart
};

export default CoinsService;