import React, { useEffect, useState } from 'react';
import '../../src/css/community.css';

const ChainRegistry = () => {
  const [chainData, setChainData] = useState(null);
  const [activeTab, setActiveTab] = useState('Chain'); // Default active tab is 'sentinel'

  const tabNames = ['Chain', 'RPC', 'REST', 'gRPC'];

  const chainUrl = 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sentinel/chain.json';

  useEffect(() => {
    const fetchChainData = () => {
      fetch(chainUrl)
        .then((response) => response.json())
        .then((data) => setChainData(data))
        .catch((error) => {
          console.error('Error fetching chain data:', error);
        });
    };
    fetchChainData();
  }, [chainUrl]);

  return (
    <div>
      {chainData && (
        <div>
          {tabNames.map((tabName) => (
            <button
            key={tabName}
            className={`tab-item chainButton ${activeTab === tabName ? 'active' : ''}`}
            onClick={() => setActiveTab(tabName)}
            >
              {tabName}
            </button>
          ))}
          {activeTab === 'Chain' && (
            <div>
              <table>
                <tbody>
                  {/* Render fees content here */}
                  <tr>
                    <th>
                      <code>Property</code>
                    </th>
                    <th>
                      <code>Value</code>
                    </th>
                  </tr>
                  <tr>
                    <td>Chain Name </td>
                    <td>{chainData.chain_name}</td>
                  </tr>
                  <tr>
                    <td>Status</td>
                    <td>{chainData.status}</td>
                  </tr>
                  <tr>
                    <td>Network Type</td>
                    <td>{chainData.network_type}</td>
                  </tr>
                  <tr>
                    <td>Website</td>
                    <td>{chainData.website}</td>
                  </tr>
                  <tr>
                    <td>Pretty Name</td>
                    <td>{chainData.pretty_name}</td>
                  </tr>
                  <tr>
                    <td>Chain ID</td>
                    <td>{chainData.chain_id}</td>
                  </tr>
                  <tr>
                    <td>Bech32 Prefix</td>
                    <td>{chainData.bech32_prefix}</td>
                  </tr>
                  <tr>
                    <td>Daemon Name</td>
                    <td>{chainData.daemon_name}</td>
                  </tr>
                  <tr>
                    <td>Node Home</td>
                    <td>{chainData.node_home}</td>
                  </tr>
                  <tr>
                    <td>Slip44</td>
                    <td>{chainData.slip44}</td>
                  </tr>
                  <tr>
                    <td>Key Algos</td>
                    <td>{chainData.key_algos}</td>
                  </tr>
                  {chainData.fees.fee_tokens.map((feeToken, index) => (
                    <tr key={index}>
                      <td>Fees</td>
                      <td>
                        <div>
                          Denom: {feeToken.denom}<br />
                          Low: {feeToken.low_gas_price}<br />
                          Average: {feeToken.average_gas_price}<br />
                          High: {feeToken.high_gas_price}
                        </div>
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td>Git Repo</td>
                    <td>{chainData.codebase.git_repo}</td>
                  </tr>
                  <tr>
                    <td>Recommended Version</td>
                    <td>{chainData.codebase.recommended_version}</td>
                  </tr>
                  <tr>
                    <td> Genesis URL</td>
                    <td>{chainData.codebase.genesis.genesis_url}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
          {activeTab === 'RPC' && (
            <div>
              <table>
                <tbody>
                  <tr>
                    <th>
                      <code>Provider</code>
                    </th>
                    <th>
                      <code>Address</code>
                    </th>
                  </tr>
                  {/* Render fees content here */}
                  {chainData.apis.rpc.map((r, index) => (
                    <tr key={index}>  
                      <td>
                        {r.provider}
                      </td>
                      <td>
                        {r.address}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {activeTab === 'REST' && (
            <div>
            <table>
              <tbody>
                <tr>
                  <th>
                    <code>Provider</code>
                  </th>
                  <th>
                    <code>Address</code>
                  </th>
                </tr>
                {/* Render fees content here */}
                {chainData.apis.rest.map((r, index) => (
                  <tr key={index}>  
                    <td>
                      {r.provider}
                    </td>
                    <td>
                      {r.address}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          )}
          {activeTab === 'gRPC' && (
            <div>
            <table>
              <tbody>
                <tr>
                  <th>
                    <code>Provider</code>
                  </th>
                  <th>
                    <code>Address</code>
                  </th>
                </tr>
                {/* Render fees content here */}
                {chainData.apis.grpc.map((r, index) => (
                  <tr key={index}>  
                    <td>
                      {r.provider}
                    </td>
                    <td>
                      {r.address}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ChainRegistry;