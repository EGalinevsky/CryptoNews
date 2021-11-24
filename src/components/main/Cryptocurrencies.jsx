import React, { useState } from 'react'
import millify from 'millify'
import {Link} from 'react-router-dom'
import {Card, Row, Col, Input} from 'antd'

import { useGetCryptosQuery } from '../../servives/cryptoApi'

const Cryptocurrencies = ({simplified}) => {
    const count = simplified ? 10 : 100
    const {data: cryptosList, isFetching} = useGetCryptosQuery(count)
    const cryptos = cryptosList?.data?.coins

    // const [cryptos, setCryptos] = useState(cryptosList?.data?.coins)
    
    // console.log(useGetCryptosQuery())
    // console.log(cryptosList)


    if(isFetching) return 'loading...'
    return (
        <>
        <div className="search-crypto">
            <Input 
            placeholder="Search Cryptocurrency"
            onChange/>
        </div>
        <Row gutter={[32, 32]} className="crypto-card-container">
            {<p>loading...</p> && (cryptos.map(currency=>(
                <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.id}>
                    <Link to={`/crypto/${currency.id}`}>
                        <Card 
                        title={`${currency.rank}. ${currency.name}`} 
                        extra={<img className="crypto-image" src={currency.iconUrl}/>}
                        hoverable>
                            <p>Price: {millify(currency.price)}</p>
                            <p>Market Cap: {millify(currency.marketCap)}</p>
                            <p>Daily Change: {millify(currency.change)}%</p>
                        </Card>
                    </Link>
                </Col>
            )))}
        </Row>  
        </>
    )
}

export default Cryptocurrencies