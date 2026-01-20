import React from 'react';
import { LineChart, BarChart, PieChart, Pie, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell, AreaChart, Area } from 'recharts';

const ChartRenderer = ({
  data,
  chartType,
  colors,
  showGrid,
  gridStyle,
  fontSize,
  showLegend,
  legendPosition,
  showLabels,
  chartAnimation,
  strokeWidth,
  barRadius,
  pieInnerRadius
}) => {
  if (!data) return null;

  const commonProps = {
    data,
    margin: { top: 20, right: 40, left: 20, bottom: 60 },
    ...(chartAnimation && { animationDuration: 1000 })
  };

  const legendProps = showLegend ? {
    layout: legendPosition === 'right' || legendPosition === 'left' ? 'vertical' : 'horizontal',
    align: legendPosition === 'right' ? 'right' : legendPosition === 'left' ? 'left' : 'center',
    verticalAlign: legendPosition === 'bottom' ? 'bottom' : legendPosition === 'top' ? 'top' : 'middle'
  } : {};

  switch (chartType) {
    case 'pie':
      return (
        <ResponsiveContainer width="100%" height={500}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={pieInnerRadius}
              outerRadius={150}
              label={showLabels ? (entry) => `${entry.name}: ${entry.value}` : false}
              labelStyle={{ fontSize: `${fontSize}px` }}
              {...(chartAnimation && { animationBegin: 0, animationDuration: 1000 })}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
              ))}
            </Pie>
            {showLegend && <Legend {...legendProps} />}
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      );

    case 'bar':
      return (
        <ResponsiveContainer width="100%" height={550}>
          <BarChart {...commonProps}>
            {showGrid && <CartesianGrid strokeDasharray={gridStyle === 'dashed' ? '5 5' : gridStyle === 'dotted' ? '2 2' : '0'} stroke="#e0e0e0" />}
            <XAxis
              dataKey="name"
              style={{ fontSize: `${fontSize}px` }}
              angle={-45}
              textAnchor="end"
              height={80}
            />
            <YAxis style={{ fontSize: `${fontSize}px` }} />
            <Tooltip />
            {showLegend && <Legend {...legendProps} />}
            <Bar dataKey="value" fill={colors[0]} radius={[barRadius, barRadius, 0, 0]}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      );

    case 'line':
      return (
        <ResponsiveContainer width="100%" height={550}>
          <LineChart {...commonProps}>
            {showGrid && <CartesianGrid strokeDasharray={gridStyle === 'dashed' ? '5 5' : gridStyle === 'dotted' ? '2 2' : '0'} stroke="#e0e0e0" />}
            <XAxis
              dataKey="name"
              style={{ fontSize: `${fontSize}px` }}
              angle={-45}
              textAnchor="end"
              height={80}
            />
            <YAxis style={{ fontSize: `${fontSize}px` }} />
            <Tooltip />
            {showLegend && <Legend {...legendProps} />}
            <Line
              type="monotone"
              dataKey="value"
              stroke={colors[0]}
              strokeWidth={strokeWidth}
              dot={{ fill: colors[0], r: 5 }}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      );

    case 'area':
      return (
        <ResponsiveContainer width="100%" height={550}>
          <AreaChart {...commonProps}>
            {showGrid && <CartesianGrid strokeDasharray={gridStyle === 'dashed' ? '5 5' : gridStyle === 'dotted' ? '2 2' : '0'} stroke="#e0e0e0" />}
            <XAxis
              dataKey="name"
              style={{ fontSize: `${fontSize}px` }}
              angle={-45}
              textAnchor="end"
              height={80}
            />
            <YAxis style={{ fontSize: `${fontSize}px` }} />
            <Tooltip />
            {showLegend && <Legend {...legendProps} />}
            <Area
              type="monotone"
              dataKey="value"
              stroke={colors[0]}
              fill={colors[0]}
              fillOpacity={0.6}
            />
          </AreaChart>
        </ResponsiveContainer>
      );

    default:
      return null;
  }
};

export default ChartRenderer;
