 
import React, { useState, useEffect } from 'react';

const AssetData = () => {
  const [assets, setAssets] = useState(null);
  // add setSelectedUrl if uncommented below code
  const [selectedUrl] = useState('https://raw.githubusercontent.com/cosmos/chain-registry/master/sentinel/assetlist.json');
  
  useEffect(() => {
    const fetchAssets = () => {
      if (!selectedUrl) return;
      fetch(selectedUrl)
        .then((result) => result.json())
        .then((data) => setAssets(data.assets));
    };
    fetchAssets();
  }, [selectedUrl]);

  return (
    <>
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