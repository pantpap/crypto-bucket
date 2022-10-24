import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import CoinsService from "../services/CoinsService";

const CoinDetails: React.FC = () => {
    const [coin, setCoin] = useState<{[key: string]: any}>({});
    const { id }= useParams();

    const getCoin = (id: string) => {
      CoinsService.getCoin(id)
        .then((response: any) => {
          setCoin(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    };

    useEffect(() => {
      if (id){
          getCoin(id);
      }
    }, [id]);

    return (
      <div className="row">
        <div className="col-md-3">
          <img className="card-img-top" data-src={coin?.image?.large} alt={coin?.id} src={coin?.image?.large} data-holder-rendered="true" />
        </div>
        <div className="col-md-9">
            <h2 className="card-text" style={{ fontWeight: 'bold'}}>{coin?.name} </h2>
            <h4 className="card-text">Current Price: {coin?.market_data?.current_price?.usd}</h4>
            <div className="description">
                <p className="card-text mb-3" dangerouslySetInnerHTML={{__html: coin?.description?.en}}></p>
            </div>
            <hr/>
            <div className="row  mb-3">
                <div className="row">
                    <div className="col-12 text-center">Links</div>
                    <div className='col-4 links mb-2'>
                        <div className='title'>Blockchain</div>
                        <div className="links-category">
                            {coin?.links?.blockchain_site.map((link: string)=> {
                                if(link){
                                    return(
                                        <div key={link}>
                                            {/*<Link key={link} to={{pathname: `//${link}`}} target="_blank">{link}</Link>*/}
                                            <a href={link} target='_blank' rel='noreferrer'>{link}</a>
                                        </div>
                                    )
                                }
                            })}
                        </div>
                    </div>
                    <div className='col-4 links mb-2'>
                        <div className="title">Official WebSite</div>
                        <div className="links-category">
                            {coin?.links?.homepage.map((link: string)=> {
                                if(link){
                                    return(
                                        <div key={link}>
                                            <a  href={link} target='_blank' rel='noreferrer'>{link}</a>
                                        </div>

                                        // <Link key={link} rel='noopener' to={{pathname: `//${link}`}} target="_blank">{link}</Link>
                                    )
                                }
                            })}
                        </div>
                    </div>
                    <div className=' col-4 links mb-2'>
                        <div className="title">Official Forum Urls</div>
                        <div className="links-category">
                            {coin?.links?.official_forum_url.map((link: string)=> {
                                if(link){
                                    return(
                                        <div key={link}>
                                            <a  href={link} target='_blank' rel='noreferrer'>{link}</a>
                                        </div>

                                        // <Link key={link} rel='noopener' to={{pathname: `//${link}`}} target="_blank">{link}</Link>
                                    )
                                }
                            })}
                        </div>
                    </div>
                </div>

            </div>
            <hr/>
            <div className="statistics row ">
                <div className="col-12 text-center">Statistics</div>

                 <div className="row">
                     <div className="col-4">
                         <div className="card-text">Reddit Accounts: {coin?.community_data?.reddit_accounts_active_48h}</div>
                         <div className="card-text">Twitter Followers: {coin?.community_data?.twitter_followers}</div>
                         <div className="card-text">Up Votes: {coin?.sentiment_votes_up_percentage}</div>
                         <div className="card-text">Down Votes: {coin?.sentiment_votes_down_percentage}</div>
                     </div>
                     <div className="col-4">
                         <div className="card-text">Last day highest price: {coin?.market_data?.high_24h?.usd}</div>
                         <div className="card-text">Last day lowest price: {coin?.market_data?.low_24h?.usd}</div>
                         <div className="card-text">Creation high: {coin?.market_data?.ath?.usd} -
                             {new Date(coin?.market_data?.ath_date?.usd).toLocaleDateString()}</div>
                         <div className="card-text">creation low {coin?.market_data?.atl?.usd} -
                             {new Date(coin?.market_data?.atl_date?.usd).toLocaleDateString()}</div>
                     </div>
                 </div>

            </div>

        </div>
        <div className="col">
          <Link to={`/coins/${coin.id}/market_chart`}><p style={{textAlign: 'right'}}>Show Market Chart</p></Link>
        </div>
      </div>
    );
  };
  

export default CoinDetails;
