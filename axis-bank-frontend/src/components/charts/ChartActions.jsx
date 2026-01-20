import React from 'react';

const ChartActions = ({
  chartTitle,
  setChartTitle,
  chartType,
  showCustomization,
  setShowCustomization,
  onDownload,
  onClear
}) => {
  return (
    <>
      <div className="chart-header">
        <div>
          <input
            type="text"
            value={chartTitle}
            onChange={(e) => setChartTitle(e.target.value)}
            className="chart-title-input"
            placeholder="Chart Title"
          />
          <p className="chart-info">Auto-selected: {chartType.charAt(0).toUpperCase() + chartType.slice(1)} Chart</p>
        </div>
        <div className="chart-actions">
          <button
            className={`action-btn customize ${showCustomization ? 'active' : ''}`}
            onClick={() => setShowCustomization(!showCustomization)}
          >
            🎨 Customize
          </button>
          <button className="action-btn download" onClick={onDownload}>
            📥 Download
          </button>
          <button className="action-btn clear" onClick={onClear}>
            🗑️ Clear
          </button>
        </div>
      </div>

      <style jsx>{`
        .chart-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          padding-bottom: 1rem;
          border-bottom: 2px solid #f0f0f0;
        }
        .chart-title-input {
          font-size: 1.8rem;
          font-weight: 700;
          color: #97144D;
          border: none;
          outline: none;
          border-bottom: 2px solid transparent;
          padding: 0.3rem 0;
          transition: border-color 0.3s;
          width: 100%;
          max-width: 500px;
        }
        .chart-title-input:focus {
          border-bottom-color: #97144D;
        }
        .chart-info {
          color: #666;
          font-size: 0.95rem;
          margin-top: 0.5rem;
        }
        .chart-actions {
          display: flex;
          gap: 1rem;
        }
        .action-btn {
          padding: 0.7rem 1.5rem;
          border: none;
          border-radius: 10px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.3s ease;
          font-size: 0.95rem;
        }
        .action-btn.customize {
          background: #7209B7;
          color: white;
        }
        .action-btn.customize.active {
          background: #5A189A;
          box-shadow: 0 0 0 3px rgba(114, 9, 183, 0.2);
        }
        .action-btn.customize:hover {
          background: #5A189A;
          transform: translateY(-2px);
        }
        .action-btn.download {
          background: #2E7D32;
          color: white;
        }
        .action-btn.download:hover {
          background: #1B5E20;
          transform: translateY(-2px);
        }
        .action-btn.clear {
          background: #C62828;
          color: white;
        }
        .action-btn.clear:hover {
          background: #B71C1C;
          transform: translateY(-2px);
        }
        @media (max-width: 768px) {
          .chart-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }
          .chart-actions {
            width: 100%;
            flex-wrap: wrap;
          }
          .action-btn {
            flex: 1;
            min-width: 120px;
          }
        }
      `}</style>
    </>
  );
};

export default ChartActions;
