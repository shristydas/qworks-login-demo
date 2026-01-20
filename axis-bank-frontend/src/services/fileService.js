import * as XLSX from 'xlsx';
import html2canvas from 'html2canvas';

export const parseExcelFile = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      try {
        const workbook = XLSX.read(event.target.result, { type: 'binary' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);

        if (jsonData.length === 0) {
          reject(new Error('The uploaded file is empty!'));
          return;
        }

        const columns = Object.keys(jsonData[0]);
        if (columns.length < 2) {
          reject(new Error('Please upload a file with at least 2 columns!'));
          return;
        }

        resolve(jsonData);
      } catch (error) {
        reject(new Error('Error reading file. Please ensure it is a valid Excel file.'));
      }
    };

    reader.onerror = () => {
      reject(new Error('Failed to read file'));
    };

    reader.readAsBinaryString(file);
  });
};

export const validateFileData = (data) => {
  if (!data || data.length === 0) {
    throw new Error('No data found in file');
  }

  const columns = Object.keys(data[0]);
  if (columns.length < 2) {
    throw new Error('File must have at least 2 columns');
  }

  return true;
};

export const downloadChart = async (chartRef, title, backgroundColor) => {
  if (!chartRef.current) {
    throw new Error('No chart to download!');
  }

  try {
    const canvas = await html2canvas(chartRef.current, {
      backgroundColor: backgroundColor,
      scale: 2,
      logging: false,
    });

    return new Promise((resolve, reject) => {
      canvas.toBlob((blob) => {
        if (!blob) {
          reject(new Error('Failed to create image'));
          return;
        }

        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.download = `${title.replace(/\s+/g, '_')}_${Date.now()}.png`;
        link.href = url;
        link.click();
        URL.revokeObjectURL(url);
        resolve();
      });
    });
  } catch (error) {
    throw new Error('Error downloading chart. Please try again.');
  }
};
