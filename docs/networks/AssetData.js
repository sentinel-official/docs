import React, { useState, useEffect } from 'react';

const AssetData = () => {
  const [assets, setAssets] = useState(null);
  // add setSelectedUrl if uncommented below code
  const [selectedUrl] = useState('https://raw.githubusercontent.com/cosmos/chain-registry/master/sentinel/assetlist.json');

  // const assetUrls = {
  //   mainnet: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sentinel/assetlist.json'
  // };

  
  // const chainButtonStyle = {
  //   backgroundColor: '#322dc2',
  //   border: 'none',
  //   color: 'white',
  //   padding: '15px 32px',
  //   textAlign: 'center',
  //   textDecoration: 'none',
  //   display: 'inline-block',
  //   fontSize: '16px',
  //   margin: '4px 2px',
  //   borderRadius: '8px',
  //   transition: 'background-color 0.2s ease-in-out', 
  //   ':hover': {
  //     backgroundColor: '#5f4bea',
  //   }
  // };
  
  

  useEffect(() => {
    const fetchAssets = () => {
      if (!selectedUrl) return;
      fetch(selectedUrl)
        .then((result) => result.json())
        .then((data) => setAssets(data.assets));
    };
    fetchAssets();
  }, [selectedUrl]);

  // const handleUrlChange = (url) => {
  //   setSelectedUrl(url);
  // };

  return (
    <>
      {/* <div>
        <h3>Select a chain</h3>
        {Object.entries(assetUrls).map(([key, url]) => (
           <button key={key} onClick={() => handleUrlChange(url)} style={chainButtonStyle}>
            {key}
          </button>
        ))}
      </div> */}
      {assets ? (
        <table>
  <thead>
    <tr>
      <th>
        <code>Name</code>
      </th>
      <th>
        <code>Information</code>
      </th>
    </tr>
  </thead>
  <tbody>
  {assets.map((asset) => (
    <tr key={asset.symbol}>
      <td>{asset.name}</td>
      <td>
        <div>
          <b>Name:</b>  {asset.name} <br />
          <b>Symbol:</b>  {asset.symbol} <br />
          <b>Base:</b> {asset.base} <br />
          <b>Display:</b> {asset.display}
        </div>
      </td>
    </tr>
  ))}
</tbody>

</table>
      ) : (
        <h1>Fetching Assets...</h1>
      )}
    </>
  );
};

export default AssetData;