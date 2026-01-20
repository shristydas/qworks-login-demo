import React, { useRef } from 'react';

const FileUpload = ({ fileName, onFileUpload }) => {
  const fileInputRef = useRef(null);

  return (
    <>
      <div className="upload-section">
        <div className="upload-card">
          <div className="upload-icon">
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#97144D" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="17 8 12 3 7 8"/>
              <line x1="12" y1="3" x2="12" y2="15"/>
            </svg>
          </div>
          <h2>Upload Excel File</h2>
          <p>Supported formats: .xlsx, .xls, .csv</p>
          <p className="requirement">Minimum 2 columns required</p>

          <input
            type="file"
            ref={fileInputRef}
            onChange={onFileUpload}
            accept=".xlsx,.xls,.csv"
            style={{ display: 'none' }}
          />

          <button
            className="upload-btn"
            onClick={() => fileInputRef.current?.click()}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Choose File
          </button>

          {fileName && (
            <div className="file-info">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2E7D32" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
              <span>{fileName}</span>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .upload-section {
          display: flex;
          justify-content: center;
          margin-bottom: 3rem;
        }
        .upload-card {
          background: white;
          border-radius: 20px;
          padding: 3rem;
          text-align: center;
          box-shadow: 0 20px 60px rgba(0,0,0,0.15);
          max-width: 500px;
          width: 100%;
        }
        .upload-icon {
          margin-bottom: 1.5rem;
        }
        .upload-card h2 {
          color: #333;
          margin-bottom: 0.5rem;
          font-size: 1.8rem;
        }
        .upload-card p {
          color: #666;
          margin-bottom: 0.5rem;
        }
        .requirement {
          color: #97144D;
          font-weight: 600;
          font-size: 0.9rem;
        }
        .upload-btn {
          margin-top: 2rem;
          padding: 1rem 2.5rem;
          background: linear-gradient(135deg, #97144D 0%, #6B0E36 100%);
          color: white;
          border: none;
          border-radius: 12px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(151, 20, 77, 0.3);
        }
        .upload-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(151, 20, 77, 0.4);
        }
        .file-info {
          margin-top: 1.5rem;
          padding: 1rem;
          background: #e8f5e9;
          border-radius: 8px;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: #2E7D32;
          font-weight: 500;
        }
      `}</style>
    </>
  );
};

export default FileUpload;
