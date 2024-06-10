// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

const DvpnPool = () => {
  const [poolData, setPoolData] = useState(null);
  const [inflationData, setInflationData] = useState(null);
  const [supplyData, setSupplyData] = useState(null);
  const [circulatingSupply, setCirculatingSupply] = useState(null);

  const poolUrl = 'https://lcd.sentinel.co/cosmos/staking/v1beta1/pool';
  const inflationUrl = 'https://lcd.sentinel.co/cosmos/mint/v1beta1/inflation';
  const supplyUrl = 'https://lcd.sentinel.co/cosmos/bank/v1beta1/supply/udvpn';

  const fetchData = async (url, setDataFunction) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setDataFunction(data);
    } catch (error) {
      console.error(`Error fetching data from ${url}:`, error);
    }
  };

  const formatNumber = (number) => {
    if (number === null) {
      return 'N/A';
    }

    const billion = 1e9;
    if (number >= billion) {
      return (number / billion).toFixed(2) + 'B';
    }
    return number.toFixed(2);
  };

  const calculateCirculatingSupply = () => {
    if (supplyData && poolData && inflationData) {
      const totalSupply = parseFloat(supplyData.amount.amount) / 1e6; // Convert to DVPN
      const bondedTokens = parseFloat(poolData.pool.bonded_tokens) / 1e6; // Convert to DVPN
      const circulatingSupply = totalSupply - bondedTokens;
      setCirculatingSupply(circulatingSupply);
    }
  };

  useEffect(() => {
    fetchData(poolUrl, setPoolData);
    fetchData(inflationUrl, setInflationData);
    fetchData(supplyUrl, setSupplyData);
  }, [poolUrl, inflationUrl, supplyUrl]);

  useEffect(() => {
    calculateCirculatingSupply();
  }, [supplyData, poolData, inflationData]);

  return (
    <>
      {poolData && inflationData && supplyData ? (
        <table>
          <thead>
            <tr>
              <th>
                <code>Attribute</code>
              </th>
              <th>
                <code>Value</code>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Circulating Tokens</td>
              <td>{formatNumber(circulatingSupply)}</td>
            </tr>
            <tr>
              <td>Bonded Tokens</td>
              <td>{formatNumber(parseFloat(poolData.pool.bonded_tokens) / 1e6)}</td> {/* Convert to DVPN */}
            </tr>
            <tr>
              <td>Total Supply</td>
              <td>{formatNumber(parseFloat(supplyData.amount.amount) / 1e6)}</td> {/* Convert to DVPN */}
            </tr>
            <tr>
              <td>Inflation</td>
              <td>{inflationData.inflation !== null ? (parseFloat(inflationData.inflation) * 100).toFixed(1) + '%' : 'N/A'}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <h1>Fetching Data...</h1>
      )}
    </>
  );
};

export default DvpnPool;
