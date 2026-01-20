import React, { useState, useRef } from 'react';
import Footer from '../components/layout/Footer';
import FileUpload from '../components/upload/FileUpload';
import DataTable from '../components/upload/DataTable';
import ChartRenderer from '../components/charts/ChartRenderer';
import ChartCustomization from '../components/charts/ChartCustomization';
import ChartActions from '../components/charts/ChartActions';
import { parseExcelFile, downloadChart } from '../services/fileService';
import { determineChartType, formatChartData } from '../utils/chartHelpers';
import { COLOR_PALETTES } from '../constants/colorPalettes';

const DashboardPage = () => {
  const [uploadedData, setUploadedData] = useState(null);
  const [chartType, setChartType] = useState('auto');
  const [fileName, setFileName] = useState('');
  const [showCustomization, setShowCustomization] = useState(false);

  const [chartTitle, setChartTitle] = useState('Data Visualization');
  const [colorPalette, setColorPalette] = useState('axis');
  const [showGrid, setShowGrid] = useState(true);
  const [showLegend, setShowLegend] = useState(true);
  const [showLabels, setShowLabels] = useState(true);
  const [chartAnimation, setChartAnimation] = useState(true);
  const [strokeWidth, setStrokeWidth] = useState(3);

  const [chartBackground, setChartBackground] = useState('#ffffff');
  const [fontSize, setFontSize] = useState(14);
  const [barRadius, setBarRadius] = useState(8);
  const [pieInnerRadius, setPieInnerRadius] = useState(0);
  const [gridStyle, setGridStyle] = useState('solid');
  const [legendPosition, setLegendPosition] = useState('bottom');

  const chartRef = useRef(null);

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setFileName(file.name);

    try {
      const jsonData = await parseExcelFile(file);
      const processedData = formatChartData(jsonData);
      setUploadedData(processedData);
      setChartType(determineChartType(processedData));
      setChartTitle(`${file.name.replace(/\.[^/.]+$/, "")} Analysis`);
    } catch (error) {
      alert(error.message);
    }
  };

  const handleDownloadChart = async () => {
    try {
      await downloadChart(chartRef, chartTitle, chartBackground);
    } catch (error) {
      alert(error.message);
    }
  };

  const clearData = () => {
    setUploadedData(null);
    setFileName('');
    setShowCustomization(false);
    setChartTitle('Data Visualization');
  };

  const resetCustomization = () => {
    setColorPalette('axis');
    setShowGrid(true);
    setShowLegend(true);
    setShowLabels(true);
    setChartAnimation(true);
    setStrokeWidth(3);
    setChartBackground('#ffffff');
    setFontSize(14);
    setBarRadius(8);
    setPieInnerRadius(0);
    setGridStyle('solid');
    setLegendPosition('bottom');
  };

  return (
    <>
      <div className="dashboard">
        <div className="dashboard-container">
          <div className="welcome-section">
            <h1>Welcome to Your Dashboard</h1>
            <p>Upload your Excel file to visualize data instantly</p>
          </div>

          <FileUpload fileName={fileName} onFileUpload={handleFileUpload} />

          {uploadedData && (
            <div className="chart-section">
              <ChartActions
                chartTitle={chartTitle}
                setChartTitle={setChartTitle}
                chartType={chartType}
                showCustomization={showCustomization}
                setShowCustomization={setShowCustomization}
                onDownload={handleDownloadChart}
                onClear={clearData}
              />

              {showCustomization && (
                <ChartCustomization
                  chartType={chartType}
                  setChartType={setChartType}
                  colorPalette={colorPalette}
                  setColorPalette={setColorPalette}
                  chartBackground={chartBackground}
                  setChartBackground={setChartBackground}
                  legendPosition={legendPosition}
                  setLegendPosition={setLegendPosition}
                  fontSize={fontSize}
                  setFontSize={setFontSize}
                  strokeWidth={strokeWidth}
                  setStrokeWidth={setStrokeWidth}
                  barRadius={barRadius}
                  setBarRadius={setBarRadius}
                  pieInnerRadius={pieInnerRadius}
                  setPieInnerRadius={setPieInnerRadius}
                  gridStyle={gridStyle}
                  setGridStyle={setGridStyle}
                  showGrid={showGrid}
                  setShowGrid={setShowGrid}
                  showLegend={showLegend}
                  setShowLegend={setShowLegend}
                  showLabels={showLabels}
                  setShowLabels={setShowLabels}
                  chartAnimation={chartAnimation}
                  setChartAnimation={setChartAnimation}
                  onReset={resetCustomization}
                />
              )}

              <div className="chart-container" ref={chartRef} style={{ background: chartBackground }}>
                <ChartRenderer
                  data={uploadedData}
                  chartType={chartType}
                  colors={COLOR_PALETTES[colorPalette]}
                  showGrid={showGrid}
                  gridStyle={gridStyle}
                  fontSize={fontSize}
                  showLegend={showLegend}
                  legendPosition={legendPosition}
                  showLabels={showLabels}
                  chartAnimation={chartAnimation}
                  strokeWidth={strokeWidth}
                  barRadius={barRadius}
                  pieInnerRadius={pieInnerRadius}
                />
              </div>

              <DataTable data={uploadedData} />
            </div>
          )}
        </div>
      </div>

      <Footer />

      <style jsx>{`
        .dashboard {
          min-height: calc(100vh - 200px);
          padding: 2rem;
          background: #f5f5f5;
        }
        .dashboard-container {
          max-width: 1400px;
          margin: 0 auto;
        }
        .welcome-section {
          text-align: center;
          margin-bottom: 3rem;
          animation: fadeIn 0.6s ease-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .welcome-section h1 {
          color: #97144D;
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
        }
        .welcome-section p {
          color: #666;
          font-size: 1.2rem;
        }
        .chart-section {
          background: white;
          border-radius: 20px;
          padding: 2rem;
          box-shadow: 0 20px 60px rgba(0,0,0,0.15);
        }
        .chart-container {
          margin: 2rem 0;
          padding: 2rem;
          border-radius: 12px;
          transition: background 0.3s;
        }
      `}</style>
    </>
  );
};

export default DashboardPage;
