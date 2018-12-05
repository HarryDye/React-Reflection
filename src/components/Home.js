import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => (
              <div className="main-content home">
                <h2>IEX API</h2>
                <p>A couple of links to the stock exchange</p>      <br/>
                <NavLink to="/charts/MSFT" className="link">Microsoft</NavLink>       <br/><br/><br/>
                <NavLink to="/charts/aapl" className="link">Apple</NavLink>           <br/><br/><br/>
                <NavLink to="/charts/TSLA" className="link">Tesla</NavLink>
              </div>
            );

//paste in under tesla
//maybe to search for company
// <hr/>
// <h3>Search by Symbol</h3>
//  <form onSubmit={this.handleSubmit}>
//  <input type="text" placeholder="symbol"  />
//  <button type="submit">Go!</button>
//  </form>

export default Home;
