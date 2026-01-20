export const determineChartType = (data) => {
  if (data.length <= 5) {
    return 'pie';
  } else if (data.length <= 10) {
    return 'bar';
  } else {
    return 'line';
  }
};

export const calculateStatistics = (data) => {
  const totalRecords = data.length;
  const totalValue = data.reduce((sum, row) => sum + row.value, 0);
  const average = (totalValue / totalRecords).toFixed(2);
  const maxValue = Math.max(...data.map(row => row.value));

  return {
    totalRecords,
    totalValue,
    average,
    maxValue
  };
};

export const formatChartData = (jsonData) => {
  return jsonData.map(row => {
    const keys = Object.keys(row);
    return {
      name: String(row[keys[0]]),
      value: Number(row[keys[1]]) || 0
    };
  });
};
