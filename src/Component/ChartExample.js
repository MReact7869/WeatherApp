import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer,} from 'recharts';





const ChartExample = ({ apiData, id }) => {




  return (
    <>
      <ResponsiveContainer
      width='100%'
      height={150}
      >
        <LineChart  data={apiData.forecast.forecastday[id].hour}
        >
          <XAxis />
          <YAxis />
          <Line type="monotone" dataKey="temp_c" stroke="black" />
          <CartesianGrid stroke="#ccc" />
          <Tooltip wrapperStyle={{ width: 150, backgroundColor: 'blue' }} />
        </LineChart>
      </ResponsiveContainer>

    </>
  )
}
export default ChartExample;