import React, { useState, useEffect } from 'react';

const API_URLS = {
  pool: 'https://lcd.sentinel.co/cosmos/staking/v1beta1/pool',
  inflation: 'https://lcd.sentinel.co/cosmos/mint/v1beta1/inflation',
  supply: 'https://api.supply.sentinel.co/',
  vested: 'https://api.supply.sentinel.co/',
  circulating: 'https://api.supply.sentinel.co/',
  community: 'https://api.supply.sentinel.co/',
};

const DvpnPool = () => {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const responses = await Promise.all(
        Object.values(API_URLS).map(url => fetch(url))
      );

      const jsonData = await Promise.all(responses.map(res => res.json()));

      const [poolData, inflationData, supplyData, vestedData, circulatingData, communityData] = jsonData;

      setData({
        poolData,
        inflationData,
        supplyData,
        vestedData,
        circulatingData,
        communityData,
      });
      setLoading(false);
    } catch (err) {
      console.error('Error fetching data:', err);
      setError('Failed to fetch data');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const formatNumber = (number) => {
    if (number === null) return 'N/A';
    
    // Check if number is in billions range
    const billion = 1e9;
    const million = 1e6;
  
    if (number >= billion) {
      return (number / billion).toFixed(2) + 'B';
    } else if (number >= million) {
      return (number / million).toFixed(2) + 'M';
    } else {
      return number.toFixed(2);
    }
  };
  

  if (error) return <h1>{error}</h1>;
  if (loading) return <h1>Fetching Data...</h1>;

  const {
    poolData,
    inflationData,
    supplyData,
    vestedData,
    circulatingData,
    communityData,
  } = data;

  const totalSupply = parseFloat(supplyData.total) / 1e6;
  const circulating = parseFloat(circulatingData.circulation) / 1e6;
  const vested = parseFloat(vestedData.vesting) / 1e6;
  const community = parseFloat(communityData.community_pool) / 1e6;

  return (
    <table>
      <thead>
        <tr>
          <th>
            <code>
              <b>Attribute</b>
            </code>
          </th>
          <th>
            <code>
              <b>Value</b>
            </code>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Bonded</td>
          <td>{formatNumber(parseFloat(poolData.pool.bonded_tokens) / 1e6)}</td>
        </tr>
        <tr>
          <td>Inflation</td>
          <td>
            {inflationData.inflation !== null
              ? (parseFloat(inflationData.inflation) * 100).toFixed(1) + '%'
              : 'N/A'}
          </td>
        </tr>
        <tr>
          <td>Supply</td>
          <td>
            <table>
              <tbody>
                <tr>
                  <td>
                    <b>Total</b>
                  </td>
                  <td>
                    <b>{formatNumber(totalSupply)}</b>
                  </td>
                </tr>
                <tr>
                  <td>Circulating</td>
                  <td>{formatNumber(circulating)}</td>
                </tr>
                <tr>
                  <td>Vested</td>
                  <td>{formatNumber(vested)}</td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
        <tr>
          <td>Community Pool</td>
          <td>{formatNumber(community)}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default DvpnPool;
