import React from "react";
import { Chart, Line, Tooltip } from "bizcharts";


// 数据源
const basicChartProps = {
    pure: true,
    autoFit: true,
    height: 80,
    padding: [10, 10, 0, 10]
}
function SimpleLine(props: { chartData: any[] }) {
    const { chartData } = props

    return (
        <Chart data={chartData} {...basicChartProps} height={100}>
            <Line
                position="x*y"
                size={3}
                shape={'smooth'}
                color={['name', ['#165DFF', 'rgba(106,161,255,0.3)']]}
                style={{
                    fields: ['name'],
                    callback: (name) => {
                        if (name === '未激活') {
                            return { lineDash: [8, 10] }
                        }
                        return {}
                    }
                }}
            />
            <Tooltip shared showCrosshairs />
        </Chart>
    )
}

export default SimpleLine