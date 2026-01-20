import React from 'react';
import { COLOR_PALETTES } from '../../constants/colorPalettes';

const ChartCustomization = ({
  chartType,
  setChartType,
  colorPalette,
  setColorPalette,
  chartBackground,
  setChartBackground,
  legendPosition,
  setLegendPosition,
  fontSize,
  setFontSize,
  strokeWidth,
  setStrokeWidth,
  barRadius,
  setBarRadius,
  pieInnerRadius,
  setPieInnerRadius,
  gridStyle,
  setGridStyle,
  showGrid,
  setShowGrid,
  showLegend,
  setShowLegend,
  showLabels,
  setShowLabels,
  chartAnimation,
  setChartAnimation,
  onReset
}) => {
  return (
    <>
      <div className="customization-panel">
        <div className="customization-header">
          <h3>🎨 Advanced Chart Customization</h3>
          <button className="reset-btn" onClick={onReset}>
            Reset to Default
          </button>
        </div>

        <div className="customization-tabs">
          <div className="tab-section">
            <h4>📊 Chart Settings</h4>
            <div className="customization-grid">
              <div className="custom-option">
                <label>Chart Type</label>
                <select value={chartType} onChange={(e) => setChartType(e.target.value)} className="custom-select">
                  <option value="pie">Pie Chart</option>
                  <option value="bar">Bar Chart</option>
                  <option value="line">Line Chart</option>
                  <option value="area">Area Chart</option>
                </select>
              </div>

              <div className="custom-option">
                <label>Color Palette</label>
                <select value={colorPalette} onChange={(e) => setColorPalette(e.target.value)} className="custom-select">
                  <option value="axis">Axis Bank (Burgundy)</option>
                  <option value="ocean">Ocean Blue</option>
                  <option value="forest">Forest Green</option>
                  <option value="sunset">Sunset Orange</option>
                  <option value="purple">Royal Purple</option>
                  <option value="corporate">Corporate Gray</option>
                  <option value="neon">Neon Colors</option>
                  <option value="pastel">Pastel Colors</option>
                </select>
              </div>

              <div className="custom-option">
                <label>Background Color</label>
                <input
                  type="color"
                  value={chartBackground}
                  onChange={(e) => setChartBackground(e.target.value)}
                  className="color-picker"
                />
              </div>

              <div className="custom-option">
                <label>Legend Position</label>
                <select value={legendPosition} onChange={(e) => setLegendPosition(e.target.value)} className="custom-select">
                  <option value="top">Top</option>
                  <option value="bottom">Bottom</option>
                  <option value="left">Left</option>
                  <option value="right">Right</option>
                </select>
              </div>
            </div>
          </div>

          <div className="tab-section">
            <h4>✏️ Style Settings</h4>
            <div className="customization-grid">
              <div className="custom-option">
                <label>Font Size: {fontSize}px</label>
                <input
                  type="range"
                  min="10"
                  max="24"
                  value={fontSize}
                  onChange={(e) => setFontSize(Number(e.target.value))}
                  className="custom-slider"
                />
              </div>

              {chartType === 'line' && (
                <div className="custom-option">
                  <label>Line Thickness: {strokeWidth}px</label>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={strokeWidth}
                    onChange={(e) => setStrokeWidth(Number(e.target.value))}
                    className="custom-slider"
                  />
                </div>
              )}

              {chartType === 'bar' && (
                <div className="custom-option">
                  <label>Bar Radius: {barRadius}px</label>
                  <input
                    type="range"
                    min="0"
                    max="20"
                    value={barRadius}
                    onChange={(e) => setBarRadius(Number(e.target.value))}
                    className="custom-slider"
                  />
                </div>
              )}

              {chartType === 'pie' && (
                <div className="custom-option">
                  <label>Inner Radius (Donut): {pieInnerRadius}%</label>
                  <input
                    type="range"
                    min="0"
                    max="80"
                    value={pieInnerRadius}
                    onChange={(e) => setPieInnerRadius(Number(e.target.value))}
                    className="custom-slider"
                  />
                </div>
              )}

              <div className="custom-option">
                <label>Grid Style</label>
                <select value={gridStyle} onChange={(e) => setGridStyle(e.target.value)} className="custom-select">
                  <option value="solid">Solid Lines</option>
                  <option value="dashed">Dashed Lines</option>
                  <option value="dotted">Dotted Lines</option>
                </select>
              </div>
            </div>
          </div>

          <div className="tab-section">
            <h4>⚙️ Display Options</h4>
            <div className="customization-grid">
              <div className="custom-option checkbox-option">
                <label>
                  <input
                    type="checkbox"
                    checked={showGrid}
                    onChange={(e) => setShowGrid(e.target.checked)}
                  />
                  <span>Show Grid</span>
                </label>
              </div>

              <div className="custom-option checkbox-option">
                <label>
                  <input
                    type="checkbox"
                    checked={showLegend}
                    onChange={(e) => setShowLegend(e.target.checked)}
                  />
                  <span>Show Legend</span>
                </label>
              </div>

              <div className="custom-option checkbox-option">
                <label>
                  <input
                    type="checkbox"
                    checked={showLabels}
                    onChange={(e) => setShowLabels(e.target.checked)}
                  />
                  <span>Show Labels</span>
                </label>
              </div>

              <div className="custom-option checkbox-option">
                <label>
                  <input
                    type="checkbox"
                    checked={chartAnimation}
                    onChange={(e) => setChartAnimation(e.target.checked)}
                  />
                  <span>Enable Animation</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="color-preview">
          <label>Color Preview:</label>
          <div className="color-swatches">
            {COLOR_PALETTES[colorPalette].map((color, idx) => (
              <div key={idx} className="color-swatch" style={{ background: color }}></div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .customization-panel {
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          border-radius: 12px;
          padding: 2rem;
          margin-bottom: 2rem;
          border: 2px solid #7209B7;
        }
        .customization-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }
        .customization-header h3 {
          color: #7209B7;
          font-size: 1.5rem;
          margin: 0;
        }
        .reset-btn {
          padding: 0.5rem 1rem;
          background: white;
          border: 2px solid #7209B7;
          color: #7209B7;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
        }
        .reset-btn:hover {
          background: #7209B7;
          color: white;
        }
        .customization-tabs {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .tab-section {
          background: white;
          padding: 1.5rem;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        .tab-section h4 {
          color: #333;
          margin-bottom: 1rem;
          font-size: 1.2rem;
          padding-bottom: 0.5rem;
          border-bottom: 2px solid #7209B7;
        }
        .customization-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
        }
        .custom-option {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .custom-option label {
          font-weight: 600;
          color: #333;
          font-size: 0.95rem;
        }
        .custom-select {
          padding: 0.8rem;
          border: 2px solid #e0e0e0;
          border-radius: 8px;
          font-size: 1rem;
          background: white;
          cursor: pointer;
          transition: all 0.3s;
        }
        .custom-select:focus {
          outline: none;
          border-color: #7209B7;
          box-shadow: 0 0 0 3px rgba(114, 9, 183, 0.1);
        }
        .custom-slider {
          width: 100%;
          height: 6px;
          border-radius: 5px;
          background: #d3d3d3;
          outline: none;
          -webkit-appearance: none;
        }
        .custom-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #7209B7;
          cursor: pointer;
        }
        .custom-slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #7209B7;
          cursor: pointer;
          border: none;
        }
        .color-picker {
          width: 100%;
          height: 50px;
          border: 2px solid #e0e0e0;
          border-radius: 8px;
          cursor: pointer;
        }
        .checkbox-option label {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          cursor: pointer;
          padding: 0.8rem;
          background: #f8f9fa;
          border-radius: 8px;
          transition: all 0.3s;
        }
        .checkbox-option label:hover {
          background: #e9ecef;
        }
        .checkbox-option input[type="checkbox"] {
          width: 20px;
          height: 20px;
          cursor: pointer;
          accent-color: #7209B7;
        }
        .checkbox-option span {
          font-weight: 600;
          color: #333;
        }
        .color-preview {
          background: white;
          padding: 1.5rem;
          border-radius: 8px;
          margin-top: 1.5rem;
        }
        .color-preview label {
          font-weight: 600;
          color: #333;
          margin-bottom: 1rem;
          display: block;
        }
        .color-swatches {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .color-swatch {
          width: 60px;
          height: 60px;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.2);
          transition: transform 0.2s;
          cursor: pointer;
        }
        .color-swatch:hover {
          transform: scale(1.15);
        }
        @media (max-width: 768px) {
          .customization-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
};

export default ChartCustomization;
