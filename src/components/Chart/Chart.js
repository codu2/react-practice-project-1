import React from 'react';

import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    //월별로 expenses를 합산한 다음 가장 값이 큰 값을 찾아야 함. 그게 maxValue가 됨
    const totalMaximum = Math.max(...dataPointValues);
    //dataPointValues의 값은 숫자로 이루어진 배열인데 Math.max()메소드가 원하는 인수는 그냥 숫자의 나열이므로, ...spread 연산자를 사용해서 모든 배열 요소들을 꺼내줌

    return <div className="chart">
        {props.dataPoints.map(dataPoint => <ChartBar key={dataPoint.label} value={dataPoint.value} maxValue={totalMaximum} label={dataPoint.label} />)} 
    </div>
};

export default Chart;