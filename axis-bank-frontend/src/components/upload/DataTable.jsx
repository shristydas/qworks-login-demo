import React from 'react';
import { calculateStatistics } from '../../utils/chartHelpers';

const DataTable = ({ data }) => {
  const stats = calculateStatistics(data);

  return (
    <>
      <div className="data-table">
        <h3>Data Summary</h3>
        <div className="table-stats">
          <div className="stat-card">
            <span className="stat-label">Total Records</span>
            <span className="stat-value">{stats.totalRecords}</span>
          </div>
          <div className="stat-card">
            <span className="stat-label">Total Value</span>
            <span className="stat-value">{stats.totalValue.toLocaleString()}</span>
          </div>
          <div className="stat-card">
            <span className="stat-label">Average</span>
            <span className="stat-value">{stats.average}</span>
          </div>
          <div className="stat-card">
            <span className="stat-label">Max Value</span>
            <span className="stat-value">{stats.maxValue.toLocaleString()}</span>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Value</th>
              <th>Percentage</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => {
              const percentage = ((row.value / stats.totalValue) * 100).toFixed(2);
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{row.name}</td>
                  <td>{row.value.toLocaleString()}</td>
                  <td>{percentage}%</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <style jsx>{`
        .data-table {
          margin-top: 2rem;
        }
        .data-table h3 {
          color: #333;
          margin-bottom: 1.5rem;
          font-size: 1.3rem;
        }
        .table-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
          margin-bottom: 2rem;
        }
        .stat-card {
          background: linear-gradient(135deg, #97144D 0%, #6B0E36 100%);
          padding: 1.5rem;
          border-radius: 12px;
          color: white;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          box-shadow: 0 4px 12px rgba(151, 20, 77, 0.3);
        }
        .stat-label {
          font-size: 0.9rem;
          opacity: 0.9;
        }
        .stat-value {
          font-size: 1.8rem;
          font-weight: 700;
        }
        table {
          width: 100%;
          border-collapse: collapse;
          background: white;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        thead {
          background: linear-gradient(135deg, #97144D 0%, #6B0E36 100%);
          color: white;
        }
        th, td {
          padding: 1rem;
          text-align: left;
        }
        tbody tr {
          border-bottom: 1px solid #f0f0f0;
          transition: background 0.2s;
        }
        tbody tr:hover {
          background: #f8f9fa;
        }
        tbody tr:last-child {
          border-bottom: none;
        }
        @media (max-width: 768px) {
          .table-stats {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
};

export default DataTable;
