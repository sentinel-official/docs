import React, { useEffect, useState, useCallback } from 'react';
import '../../src/css/community.css';

const CHAIN_URL = 'https://raw.githubusercontent.com/cosmos/chain-registry/master/sentinel/chain.json';
const TAB_NAMES = ['Chain', 'RPC', 'REST', 'gRPC'];
const CHAIN_FIELDS = [
  'chain_name', 'pretty_name', 'chain_type', 'chain_id', 'status',
  'network_type', 'bech32_prefix', 'daemon_name', 'node_home', 'slip44',
];

const CopyIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const prettifyFieldName = (name) =>
  name.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

const StatusBadge = ({ status }) => {
  const modifier = status === 'live' ? '--live' : status === 'halted' ? '--halted' : '';
  return (
    <span className={`cr-status-badge cr-status-badge${modifier}`}>
      <span className="cr-status-dot" />
      {status}
    </span>
  );
};

const ChainRegistry = () => {
  const [chainData, setChainData] = useState(null);
  const [activeTab, setActiveTab] = useState('Chain');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [copiedIndex, setCopiedIndex] = useState(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(CHAIN_URL);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const data = await response.json();
      setChainData(data);
    } catch (err) {
      setError(err.message || 'Failed to fetch data');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash && TAB_NAMES.includes(hash)) {
      setActiveTab(hash);
    }
  }, []);

  const handleTabClick = (tabName) => {
    window.history.pushState(null, null, `#${tabName}`);
    setActiveTab(tabName);
  };

  const handleCopy = async (text, id) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // Fallback for non-HTTPS contexts
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    }
    setCopiedIndex(id);
    setTimeout(() => setCopiedIndex(null), 1500);
  };

  const getTabLabel = (tabName) => {
    if (tabName === 'Chain' || !chainData?.apis) return tabName;
    const key = tabName.toLowerCase();
    const count = chainData.apis[key]?.length;
    if (!count) return tabName;
    return (
      <>
        {tabName}
        <span className="cr-tab-count">{count}</span>
      </>
    );
  };

  if (loading) {
    return (
      <div className="cr-loading">
        <div className="cr-spinner" />
        <span>Loading chain registry…</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="cr-error">
        <div className="cr-error-icon">!</div>
        <p>Failed to load chain registry data.</p>
        <button className="cr-retry-btn" onClick={fetchData}>Retry</button>
      </div>
    );
  }

  if (!chainData) return null;

  return (
    <div>
      <nav className="cr-tabs" role="tablist">
        {TAB_NAMES.map((name) => (
          <button
            key={name}
            role="tab"
            aria-selected={activeTab === name}
            className={`cr-tab ${activeTab === name ? 'cr-tab--active' : ''}`}
            onClick={() => handleTabClick(name)}
          >
            {getTabLabel(name)}
          </button>
        ))}
      </nav>

      {activeTab === 'Chain' ? (
        <div className="cr-chain-grid">
          {CHAIN_FIELDS.map((field) => {
            const value = chainData[field];
            if (value === undefined) return null;
            return (
              <div className="cr-kv-card" key={field}>
                <span className="cr-kv-label">{prettifyFieldName(field)}</span>
                <span className="cr-kv-value">
                  {field === 'status' ? (
                    <StatusBadge status={value} />
                  ) : typeof value === 'object' ? (
                    JSON.stringify(value)
                  ) : (
                    String(value)
                  )}
                </span>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="cr-table-wrapper">
          <table className="cr-table">
            <thead>
              <tr>
                <th>Provider</th>
                <th>Address</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {(chainData.apis?.[activeTab.toLowerCase()] || []).map((item, i) => {
                const copyId = `${activeTab}-${i}`;
                const isGrpc = activeTab === 'gRPC';
                return (
                  <tr key={i}>
                    <td className="cr-provider">{item.provider}</td>
                    <td className="cr-address">
                      {isGrpc ? (
                        <span>{item.address}</span>
                      ) : (
                        <a href={item.address} target="_blank" rel="noopener noreferrer">
                          {item.address}
                        </a>
                      )}
                    </td>
                    <td className="cr-copy-cell">
                      <button
                        className={`cr-copy-btn ${copiedIndex === copyId ? 'cr-copy-btn--copied' : ''}`}
                        title="Copy address"
                        onClick={() => handleCopy(item.address, copyId)}
                      >
                        {copiedIndex === copyId ? <CheckIcon /> : <CopyIcon />}
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ChainRegistry;
