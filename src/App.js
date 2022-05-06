import React from "react";
import {Route,Link,Routes} from 'react-router-dom';
import {Layout, Typography, Space} from 'antd'

import {Navbar,Exchanges,Homepage,CryptoDetails,Cryptocurrencies,News} from './components'
import './App.less'

function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>

      <div className="main">
          <Layout>
            <div className="routes">
              <Routes>
                <Route exact path ="/" element={<Homepage />} />
                <Route exact path ='/exchanges' element={ <Exchanges />} />
                <Route exact path ='/cryptocurrencies' element={   <Cryptocurrencies />} />
                <Route exact path ='/crypto/:coinId'  element={ <CryptoDetails />} />
                <Route exact path ='/news' element={   <News />} />
              </Routes>
            </div>
          </Layout>
          <div className="footer" level={5}>
            <Typography.Title style={{color: 'white', textAlign: 'center', fontSize: '12px'}}>
              Cryptoverse <br/>
              All rights Reserved
            </Typography.Title>
            <Space>
              <Link to='/'>Home</Link>
              <Link to='exchanges'>Exchanges</Link>
              <Link to='news'>News</Link>
            </Space>
          </div>
         
      </div>
    </div>
  );
}

export default App;