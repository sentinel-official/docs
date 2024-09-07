 
import React, { useEffect, useState } from 'react';
import '../../src/css/community.css';

const ChainRegistry = () => {
  const [chainData, setChainData] = useState(null);
  const [activeTab, setActiveTab] = useState('Chain');

  const tabNames = ['Chain', 'RPC', 'REST', 'gRPC'];
  const chainUrl = 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sentinel/chain.json';

  useEffect(() => {
    const fetchChainData = async () => {
      try {
        const response = await fetch(chainUrl);
        const data = await response.json();
        setChainData(data);
      } catch (error) {
        console.error('Error fetching chain data:', error);
      }
    };

    fetchChainData();
  }, [chainUrl]);

  useEffect(() => {
    // Extract tab ID from the URL when the component mounts
    const tabIdFromUrl = window.location.hash.substring(1);
    if (tabIdFromUrl && tabNames.includes(tabIdFromUrl)) {
      setActiveTab(tabIdFromUrl);
    }
  }, [tabNames]);

  const handleTabClick = (tabName) => {
    // Change the URL when a tab is clicked
    window.history.pushState(null, null, `#${tabName}`);
    setActiveTab(tabName);
  };

  const prettifyFieldName = (fieldName) =>
    fieldName.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/_/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase());

  const renderTableRows = (dataArray) =>
    dataArray.map((item, index) => (
      <tr key={index}>
        <td>{item.provider}</td>
        <td>{item.address}</td>
      </tr>
    ));

  const renderChainRows = () => {
    const entries = Object.entries(chainData).slice(1, 11);

    return entries.map(([key, value], index) => (
      <tr key={index}>
        <td>{prettifyFieldName(key)}</td>
        <td>{typeof value === 'object' ? JSON.stringify(value) : value}</td>
      </tr>
    ));
  };

  const renderHeaderRow = () => (
    <tr>
      <th><code>Property</code></th>
      <th><code>Value</code></th>
    </tr>
  );

  return (
    <div>
      {chainData && (
        <div>
          {tabNames.map((tabName) => (
            <button
              key={tabName}
              className={`tab-item chainButton ${activeTab === tabName ? 'active' : ''}`}
              onClick={() => handleTabClick(tabName)}
            >
              {tabName}
            </button>
          ))}
          <div>
            <table>
              <tbody>
                {renderHeaderRow()}
                {activeTab === 'Chain' ? renderChainRows() : renderTableRows(chainData.apis[activeTab.toLowerCase()])}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChainRegistry;